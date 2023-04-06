import Modal from "../RegisterToPage/Modal/Modals";
import CartCtxTF from "../Store/auth-context";
import { useContext, useState, useEffect } from "react";
import { update, ref, set } from "firebase/database";
import { db } from "../../Firebase/firebase";
import CardName from '../Images/CardName.png'
import Comment from '../Images/comment.png'
import Clasess from './UpdateCard.module.css'
import Description from '../Images/Description.png'
import ValueDescription from "../ButtonsAndInputs/ValueDescriprion";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import SaveCancelUpdate from "../ButtonsAndInputs/SaveCancelForUpdate";
import ShowDetails from "../ButtonsAndInputs/ShowDetails";
import TimeAndDate from "./TimeAndDate";
import { uid } from "uid";
import UpdateDateAndTime from "./UpdateDateAndTime";
import AddToCard from "./OtherFields/AddToCard";
import ImageCover from "./OtherFields/ImageCover";
import ShowLabels from "./OtherFields/ShowLabels";
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
            <ImageCover ImageUUid={uuid} />
            <div className={Clasess.MainDiv}>
                <div className={Clasess.FirstC}>
                    <form className={Clasess.Form}>
                        <div className={Clasess.name}>
                            <img alt='Name' src={CardName} />
                            <input onChange={(e) => { setNameV(e.target.value) }} value={nameV} type="text" />
                        </div>
                        <p>In list <b>Card</b></p>
                        <ShowLabels/>
                        <div className={Clasess.Description}>
                            <img alt="Description" src={Description} />
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
                                <img alt="Comment" src={Comment} />
                                <p>Activity</p>
                            </div>
                            <ShowDetails ShowDetails={(val) => { setDetails(val) }} />
                        </div>
                        <button onClick={AddNameAndTitle}>+ Update Card </button>
                        {details && <TimeAndDate />}
                        {details && <UpdateDateAndTime />}
                    </form>
                </div>
                <div>
                    <AddToCard />
                </div>
            </div>
        </Modal>
    );
};

export default UpdateCard;