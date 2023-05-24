import { useContext, useEffect, useState } from "react"
import CartCtxTF from "../../Store/auth-context"
import { db } from "../../../Firebase/firebase"
import { get, ref } from "firebase/database"
import ColorAndTitle from "./ColorAndTitle"

const ShowLabels = () => {
    const Ctx = useContext(CartCtxTF)
    const columnID = Ctx.UpdateValue.ColumnId
    const UserUid = Ctx.RegisterUuid
    const cardUuid = Ctx.UpdateValue.uuid
    const [values, setValues] = useState([])
    const [UpdateModall, setUpdateModal]=useState(0)
    useEffect(() => {
        get(ref(db, `/${UserUid}/${columnID}/Names/${cardUuid}/Labels`)).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                if (data) {
                    const valuesArray = Object.values(data)
                    setValues(valuesArray)
                }
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [UpdateModall])

    return (
        <div>
            {values.map((value, index) => (
                <ColorAndTitle
                    UpdateModal={(()=>{setUpdateModal(UpdateModall +1)})}
                    key={index}
                    color={value.color}
                    title={value.title}
                    uuid={value.uuid}
                />
            ))}
        </div>
    )
}

export default ShowLabels
