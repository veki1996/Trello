import Clasess from './ImagesCard.module.css'
const ImagesCard = (props) => {
    return (
        <img
            src={props.src}
            key={props.kejs}
            style={{ width:'300px', 
            height:'150px',
            borderTopRightRadius:'10px', 
            borderTopLeftRadius:'10px',
            objectFit:'cover'
            }} />
    )
}
export default ImagesCard