import Clasess from './Redovi.module.css'
import CartCtxTF from './Store/auth-context'
import { useContext, useEffect, useState } from 'react'
import Edit from './Images/edit.png'
import RemoveBtn from './ButtonsAndInputs/removeBtnForRedovi'
import { storage } from '../Hooks/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import ImagesCard from './ImagesCard'
const Redovi = (props) => {
    const [imagesUrl, setImagesUrl] = useState([])
   
    const Ctx = useContext(CartCtxTF)
    const IliesOnClick = () => {
        Ctx.ValidateUpdate({
            value: props.lines,
            ColumnId: props.columnUUid,
            uuid: props.uuid,
            title: props.title
        })

    }
    useEffect(() => {
        const imageListRef = ref(storage, `images/${props.uuid}`)
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImagesUrl((prev) => [...prev, url])
                })
            })
        })
    }, []);
 
    return (

        <div className={Clasess.lines}>
            {imagesUrl.map((url) => {
                return <ImagesCard key={props.uuid} kejs={props.uuid} src={url} />
            })}
            <h3 className={Clasess.ha3} >{props.lines}</h3>
            <div className={Clasess.btns}>
                <>
                    <RemoveBtn columnUUid={props.columnUUid} uuid={props.uuid} />
                </>
                <>
                    <img alt='EditIMG' src={Edit} />
                    <button onClick={IliesOnClick}>+Edit</button>
                </>
            </div>
        </div>

    )
}
export default Redovi 