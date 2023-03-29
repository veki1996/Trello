import { getDatabase, ref, get } from "firebase/database"
import { useEffect, useState, useContext } from "react"
import CartCtxTF from "../Store/auth-context"
import Classes from './UpdateDateAndTime.module.css'
const UpdateDateAndTime = () => {
  const [updateDates, setUpdateDates] = useState([]);
  const Ctx = useContext(CartCtxTF);
  const CUuid = Ctx.UpdateValue.ColumnId;
  const uuid = Ctx.UpdateValue.uuid;
  const UserId = Ctx.RegisterUuid

  useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, `${UserId}/${CUuid}/Names/${uuid}/Updates/`);
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dates = Object.values(data);
          const updateDates = dates.map((item) => item.UpdateDate);
          setUpdateDates(updateDates);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [uuid]);

  return (
    <div>
      {updateDates.map((date) => {
        const jsDate = new Date(date);
        const dates = `${jsDate.toDateString()}`;
        const time = `${jsDate.getHours()}:${jsDate.getMinutes()}:${jsDate.getSeconds()}`;
        return (
          <div className={Classes.Main} key={date}>
            <p>Card updated <b>{dates}</b> at <b>{time}</b> </p>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateDateAndTime;



