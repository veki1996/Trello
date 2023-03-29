import Clasess from './ImagesCard.module.css'
const ImagesCard = (props) => {
    return (
        <img className={Clasess.ImgS}
            src={props.src}
            key={props.kejs}
            alt="Iimg"
            />
    )
}
export default ImagesCard