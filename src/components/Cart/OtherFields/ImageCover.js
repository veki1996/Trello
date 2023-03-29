import { useEffect, useState } from "react"
import { ref,  getDownloadURL,listAll } from "firebase/storage";
import { storage } from "../../../Firebase/firebase";
import Classes from './ImageCover.module.css'
const ImageCover=(props)=>{
    const [imageUrl, setImagesUrl]= useState([])
    useEffect(() => {
        const imageListRef = ref(storage, `images/${props.ImageUUid}`)
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImagesUrl((prev) => [...prev, url])
                })
            })
        })
    }, []);

    return(
        <img className={Classes.CoverImage} src={imageUrl}/>
    )
}
export default ImageCover