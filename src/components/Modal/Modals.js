import Clasess from './Modal.module.css'
import ReactDom from 'react-dom'
const Backdrop = props => {
    return <div className={Clasess.backdrop}></div>
}
const ModalOverlay = props=>{
    return <div className={Clasess.modal}>
        <div className={Clasess.content}>{props.children}</div>
    </div>
}
const portal = document.getElementById('overlays')
const Modal = props => {
    
    return <>
        {ReactDom.createPortal(<Backdrop/>, portal)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
    </>
}
export default Modal