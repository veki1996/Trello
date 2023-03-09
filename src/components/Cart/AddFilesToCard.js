import React, { useState } from "react"
import { storage } from "../../Hooks/firebase"
import { ref, uploadBytes } from "firebase/storage"
import uuid from "react-uuid"
const AddFilesToCard = (props) => {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageUploaded, setImageUploaded]= useState(false)
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
    <div>
      <input onChange={(event => { setImageUpload(event.target.files[0], setUid(uuid())) })} type="file" />
      <button onClick={UploadFiles}>Upload</button>
    </div>
  )

}
export default AddFilesToCard