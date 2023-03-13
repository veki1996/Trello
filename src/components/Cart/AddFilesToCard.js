import React, { useState } from "react"
import { storage } from "../../Hooks/firebase"
import { ref, uploadBytes } from "firebase/storage"
import './AdFilesToCard.css';
import uuid from "react-uuid"
import Upload from '../Imeges/upload.png'
const AddFilesToCard = (props) => {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageUploaded, setImageUploaded] = useState(false)
  const [uid, setUid] = useState('')
  const UploadFiles = (e) => {
    e.preventDefault()
    if (imageUpload === null) return
    const imageRef = ref(storage, `images/${uid}/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      setImageUploaded(true)
    })
  }
  props.sendUid({
    uid,
    imageUploaded,
  })

  return (
    <div className="MainDiv">
      <label>
        <input onChange={(event => { setImageUpload(event.target.files[0], setUid(uuid())) })} type="file" />
        <img src={Upload} />
      </label>
      <button onClick={UploadFiles}>{!imageUpload ? 'Upload' : 'Uploaded'}</button>
    </div>
  )

}
export default AddFilesToCard