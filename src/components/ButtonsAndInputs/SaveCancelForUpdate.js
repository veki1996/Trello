import Clases from './SaveCancelUpdate.module.css'
import { update, ref } from "firebase/database";
import { db } from "../../Firebase/firebase";
import CartCtxTF from '../Store/auth-context';
import React, { useContext } from 'react';
const SaveCancelUpdate = (props) => {
    const titleV = props.TItleDes.titleV
    const nameV = props.TItleDes.nameV
    const Ctx = useContext(CartCtxTF)
    const title = Ctx.UpdateValue.title
    const CUuid = Ctx.UpdateValue.ColumnId
    const uuid = Ctx.UpdateValue.uuid
    const UserID = Ctx.RegisterUuid
    const SaveChange = (e) => {
        e.preventDefault()
        update(ref(db, `/${UserID}/${CUuid}/Names/${uuid}`), {
            name: nameV,
            title: titleV,
            uuid
        })
        props.onCloseText(false)
    }
    const CancelChanges = () => {
        props.onCloseText(false)
        update(ref(db, `/${CUuid}/Names/${uuid}`), {
            name: nameV,
            title: title,
            uuid
        })
    }
    return (
        <div className={Clases.Btns}>
            <button onClick={SaveChange} className={Clases.Save}>Save</button>
            <button onClick={CancelChanges} className={Clases.Cancel}>Cancel</button>
        </div>
    )
}
export default SaveCancelUpdate