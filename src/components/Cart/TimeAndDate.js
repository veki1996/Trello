import CartCtxTF from "../Store/auth-context"
import { useEffect, useContext, useState } from "react"
import { getDatabase, ref, get } from "firebase/database"
const TimeAndDate = () => {
    const [date, setDate] = useState('')
    const Ctx = useContext(CartCtxTF)
    const UserID = Ctx.RegisterUuid
    const CUuid = Ctx.UpdateValue.ColumnId
    const uuid = Ctx.UpdateValue.uuid

    useEffect(() => {
        const db = getDatabase()
        const usersRef = ref(db, `${UserID}/${CUuid}/Names/${uuid}/Datum`);
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                setDate(snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])
    const dateTime = new Date(date);
    const dates = `${dateTime.toDateString()}`;
    const time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;

    return (
        <p
            style={{
                fontSize: 'small',
                marginBottom: '0px',
                fontStyle: 'italic',
                color: 'rgba(0, 0, 0, 0.568)'
            }}
        >Card Created
            <b>{dates}</b>
            at
            <b> {time}</b></p>
    )
}
export default TimeAndDate