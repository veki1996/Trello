import Cover from '../Images/cover.png'
import Classes from './CoverImage.module.css'
import { storage } from '../../Firebase/firebase'
import { useContext,  useState } from 'react';
import { listAll, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import CartCtxTF from '../Store/auth-context';

function CoverImage() {
    const Ctx = useContext(CartCtxTF)
    const uuid = Ctx.UpdateValue.uuid
    const [imageUpload, setImageUpload] = useState(null)
    const [uploading, setUploading] = useState(false)




    const handleUpload = () => {
        if (imageUpload === null) return;
        const imageRef = ref(storage, `images/${uuid}/${imageUpload.name}}`);

        setUploading(true);
        uploadBytes(imageRef, imageUpload).then(() => {
            setUploading(false);
            alert('Uploaded successfully')
            window.location.reload();
        })
            .catch(() => {
                setUploading(false);
                alert('Error uploading image')
            });

    }

    const handleInputChange = (event) => {
        setImageUpload(event.target.files[0]);

        const imageListRef = ref(storage, `images/${uuid}/`)
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {

                    const imageRef = ref(storage, url);
                    deleteObject(imageRef)
                    deleteObject(imageRef)
                        .then(() => {
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
            })
        })

    }

    return (
        <>
            <label htmlFor="upload-photo" className={Classes.Cover}>
                <img src={Cover} alt="cover" />
                Cover
            </label>
            <input
                className={Classes.ImageC}
                type="file"
                id="upload-photo"
                onChange={handleInputChange}
            />
            {imageUpload && !uploading &&
                <button onClick={handleUpload}>
                    Upload image
                </button>
            }
            {uploading && <p>Uploading image...</p>}
        </>
    );
}

export default CoverImage;
