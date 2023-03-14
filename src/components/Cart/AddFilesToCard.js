import React, { useState } from "react"
import { storage } from "../../Hooks/firebase"
import { ref, uploadBytes } from "firebase/storage"
import './AdFilesToCard.css';
import Upload from '../Imeges/upload.png'
const AddFilesToCard = (props) => {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageUploaded, setImageUploaded] = useState(false)

  const UploadFiles = (e) => {
    e.preventDefault()
    if (imageUpload === null) return
    const imageRef = ref(storage, `images/${props.uids}/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      setImageUploaded(true)
    })
  }
 

  return (
    <div className="n">
      <label>
        <input onChange={(event => { setImageUpload(event.target.files[0],) })} type="file" />
        <img src={Upload} />
      </label>
      <button onClick={UploadFiles}>{!imageUploaded ? 'Upload' : 'Uploaded'}</button>
    </div>
  )

}
export default AddFilesToCard