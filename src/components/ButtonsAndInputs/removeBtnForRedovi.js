import { ref, remove } from "firebase/database"
import { db } from "../../Firebase/firebase"
import Del from '../Images/delete.png'
import { ref as storageRef, listAll, deleteObject, getDownloadURL } from "firebase/storage"
import { useContext } from "react"
import CartCtxTF from "../Store/auth-context"
import { storage } from "../../Firebase/firebase"
const RemoveBtn = (props) => {
    const Ctc = useContext(CartCtxTF)
    const userID = Ctc.RegisterUuid
    const RemoveCard = () => {
        remove(ref(db, `/${userID}/${props.columnUUid}/Names/${props.uuid}`))
        const Image = storageRef(storage, `images/${props.uuid}`);
        listAll(Image).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    const imageRef = storageRef(storage, url);
                    deleteObject(imageRef)
                    .then(() => {
                    })
                    .catch((error) => {
                        console.log( error);
                    });
                })
            })
        })


    }
    return (
        <>
            <img alt='DelleteIMG' src={Del} />
            <button onClick={RemoveCard}>- Dellete</button>

        </>
    )
}
export default RemoveBtn