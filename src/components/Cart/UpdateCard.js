import Modal from "../Modal/Modals";
import CartCtxTF from "../Store/auth-context";
import { useContext, useState, useEffect } from "react";
import { update, ref } from "firebase/database";
import { db } from "../../Hooks/firebase";
import CardName from '../Imeges/CardName.png'
import Clasess from './UpdateCard.module.css'
import Description from '../Imeges/Description.png'
import ValueDescription from "../ButtonsAndInputs/ValueDescriprion";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import SaveCancelUpdate from "../ButtonsAndInputs/SaveCancelForUpdate";
const UpdateCard = (props) => {
    const [nameV, setNameV] = useState('')
    const [titleV, setTitleV] = useState('')
    const [openDes, setOpenDes] = useState(false)
    const Ctx = useContext(CartCtxTF)
    const name = Ctx.UpdateValue.value
    const title = Ctx.UpdateValue.title
    useEffect(() => {
        if (Ctx.isUpdateIlies) {
            setNameV(name);
            setTitleV(title)
        }
    }, [Ctx.isUpdateIlies]);
    const nameOnchangeHandler = (e) => {
        setNameV(e.target.value)
    }
    const titleOnChangeHandler = (value) => {
        setTitleV(value)
    }
    const CUuid = Ctx.UpdateValue.ColumnId
    const uuid = Ctx.UpdateValue.uuid
    const AddNameAndTitle = () => {
        update(ref(db, `/${CUuid}/Names/${uuid}`), {
            name: nameV,
            title: titleV,
            uuid
        })
        Ctx.onCloseIlises()
    }
    const closeMenu = () => {
        Ctx.onCloseIlises()
    }
    const OpenDescription = (e) => {
        e.preventDefault()
        setOpenDes(true)
    }
const closeModals=(close)=>{
    setOpenDes(close)
}
    return (
        <Modal closeMenu={closeMenu}>
            <form className={Clasess.Form}>
                <div className={Clasess.name}>
                    <img src={CardName} />
                    <input onChange={nameOnchangeHandler} value={nameV} type="text" />
                </div>
                <p>In list <b>Card</b></p>
                <div className={Clasess.Description}>
                    <img src={Description} />
                    <p>Description</p>
                    <button className={Clasess.EditDescription} onClick={OpenDescription}> Edit</button>
                </div>
                {!openDes && <ValueDescription ValueDes={title} />}
                {openDes && <ReactQuill className={Clasess.TextEditor} value={titleV} onChange={titleOnChangeHandler} />}
               {openDes&& <SaveCancelUpdate onCloseText={closeModals}
                    TItleDes={{
                        titleV,
                        nameV
                    }} />}
                <button onClick={AddNameAndTitle}>+ Update Card </button>
            </form>
        </Modal>
    );
};

export default UpdateCard;