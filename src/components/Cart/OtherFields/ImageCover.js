import { useEffect, useState } from "react"
import { ref,  getDownloadURL,listAll } from "firebase/storage";
import { storage } from "../../../Firebase/firebase";
import Classes from './ImageCover.module.css'
const ImageCover=(props)=>{
    const [imageUrl, setImagesUrl]= useState([])
    useEffect(() => {
         // Reference to the image folder in Firebase Storage
        const imageListRef = ref(storage, `images/${props.ImageUUid}`)
        // Fetch the list of images from the folder
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                  // Get the download URL for each image
                getDownloadURL(item).then((url) => {
                     // Update the state with the image URLs
                    setImagesUrl((prev) => [...prev, url])
                })
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <img  className={Classes.CoverImage} src={imageUrl}/>
    )
}
export default ImageCover