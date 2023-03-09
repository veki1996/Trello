import Clasess from './Redovi.module.css'
import CartCtxTF from './Store/auth-context'
import { useContext, useEffect, useState } from 'react'
import Edit from './Imeges/edit.png'
import RemoveBtn from './removeBtnForRedovi'
import { storage } from '../Hooks/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
const Redovi = (props) => {
    const [imagesUrl, setImagesUrl] = useState([])
    const imageListRef = ref(storage, `images/${props.uuid}`)

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
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImagesUrl((prev) => [...prev, url])
                })
            })
        })
    }, [])
    return (

        <div className={Clasess.lines}>
            <h3 className={Clasess.ha3} >{props.lines}</h3>
            {imagesUrl.map((url) => {
                return <img  key={props.uuid}  src={url} alt="IliesImg"  className={Clasess.images}/>
            })}
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