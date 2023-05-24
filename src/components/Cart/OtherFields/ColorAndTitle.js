import DelleteField from "../../ButtonsAndInputs/DelleteField"
import Classes from './ColorAdnTitle.module.css'
const ColorAndTitle = (props) => {

    return (
        <div className={Classes.main}>
        <p style={{ backgroundColor: props.color }}>{props.title}</p>
        <DelleteField UpdateModal={props.UpdateModal} uuid={props.uuid}/>
        </div>
    )
}
export default ColorAndTitle