import { ref, remove } from "firebase/database"
import { db } from "../../Hooks/firebase"
import Del from '../Imeges/delete.png'
import { ref as storageRef, getStorage, listAll, deleteObject } from "firebase/storage"
import { useContext } from "react"
import CartCtxTF from "../Store/auth-context"
const RemoveBtn = (props) => {
    const Ctc = useContext(CartCtxTF)
    const userID = Ctc.RegisterUuid
    const RemoveCard = () => {
        remove(ref(db, `/${userID}/${props.columnUUid}/Names/${props.uuid}`))
        /*const storage = getStorage()
        const folderRef = storageRef(storage, `images/${props.uuid}`);
        listAll(folderRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    deleteObject(itemRef);
                });
            })
            .then(() => {
                deleteObject(folderRef);
            })
            .catch((error) => {
                console.log("Error deleting folder: ", error);
            });
            */
    }
    return (
        <>
            <img alt='DelleteIMG' src={Del} />
            <button onClick={RemoveCard}>- Dellete</button>

        </>
    )
}
export default RemoveBtn