import Modal from "../Modal/Modals";
import CartCtxTF from "../Store/auth-context";
import { useContext, useState, useEffect } from "react";
import { update, ref, set } from "firebase/database";
import { db } from "../../Hooks/firebase";
import CardName from '../Imeges/CardName.png'
import Comment from '../Imeges/comment.png'
import Clasess from './UpdateCard.module.css'
import Description from '../Imeges/Description.png'
import ValueDescription from "../ButtonsAndInputs/ValueDescriprion";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import SaveCancelUpdate from "../ButtonsAndInputs/SaveCancelForUpdate";
import ShowDetails from "../ButtonsAndInputs/ShowDetails";
import TimeAndDate from "./TimeAndDate";
import { uid } from "uid";
import UpdateDateAndTime from "./UpdateDateAndTime";
const UpdateCard = (props) => {
    const [nameV, setNameV] = useState('')
    const [details, setDetails] = useState(false)
    const [titleV, setTitleV] = useState('')
    const [openDes, setOpenDes] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())
    const Ctx = useContext(CartCtxTF)
    const name = Ctx.UpdateValue.value
    const title = Ctx.UpdateValue.title
    const UserUid = Ctx.RegisterUuid
    useEffect(() => {
        if (Ctx.isUpdateIlies) {
            setNameV(name);
            setTitleV(title)
        }
    }, [Ctx.isUpdateIlies]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const newDate = currentTime.toString()
    const CUuid = Ctx.UpdateValue.ColumnId
    const uuid = Ctx.UpdateValue.uuid
    const DateUid = uid()
    const AddNameAndTitle = () => {
        update(ref(db, `/${UserUid}/${CUuid}/Names/${uuid}`), {
            name: nameV,
            title: titleV,
            uuid,
        })
        set(ref(db, `${UserUid}/${CUuid}/Names/${uuid}/Updates/${DateUid}`), {
            UpdateDate: newDate
        })
        Ctx.onCloseIlises()
    }
    const OpenDescription = (e) => {
        e.preventDefault()
        setOpenDes(true)
    }

    return (
        <Modal closeMenu={() => { Ctx.onCloseIlises() }}>
            <form className={Clasess.Form}>
                <div className={Clasess.name}>
                    <img src={CardName} />
                    <input onChange={(e) => { setNameV(e.target.value) }} value={nameV} type="text" />
                </div>
                <p>In list <b>Card</b></p>
                <div className={Clasess.Description}>
                    <img src={Description} />
                    <p>Description</p>
                    <button className={Clasess.EditDescription} onClick={OpenDescription}> Edit</button>
                </div>
                {!openDes && <ValueDescription OpenDes={() => { setOpenDes(true) }} ValueDes={titleV} />}
                {openDes && <ReactQuill className={Clasess.TextEditor} value={titleV} onChange={(value) => { setTitleV(value) }} />}
                {openDes && <SaveCancelUpdate onCloseText={(close) => { setOpenDes(close) }}
                    TItleDes={{
                        titleV,
                        nameV
                    }} />}
                <div className={Clasess.Activity}>
                    <div>
                        <img src={Comment}/>
                        <p>Activity</p>
                    </div>
                    <ShowDetails ShowDetails={(val) => { setDetails(val) }} />
                </div>
                <button onClick={AddNameAndTitle}>+ Update Card </button>
                {details && <TimeAndDate />}
                {details && <UpdateDateAndTime />}
            </form>
        </Modal>
    );
};

export default UpdateCard;