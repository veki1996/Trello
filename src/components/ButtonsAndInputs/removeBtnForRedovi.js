import { ref, remove } from "firebase/database"
import { db } from "../../Hooks/firebase"
import Del from '../Imeges/delete.png'
import { ref as storageRef, getStorage, listAll, deleteObject } from "firebase/storage"
const RemoveBtn = (props) => {
    const RemoveCard = () => {
        remove(ref(db, `/${props.columnUUid}/Names/${props.uuid}`))

        const storage = getStorage()
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
    }
    return (
        <>
            <img alt='DelleteIMG' src={Del} />
            <button onClick={RemoveCard}>- Dellete</button>

        </>
    )
}
export default RemoveBtn