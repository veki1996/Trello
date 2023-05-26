import DelleteField from "../../ButtonsAndInputs/DelleteField"
import Classes from './ColorAdnTitle.module.css'
import { ChromePicker } from "react-color"
import { useState, useRef, useEffect } from "react"
import { db } from "../../../Firebase/firebase"
import { update, ref } from "firebase/database"
import CartCtxTF from "../../Store/auth-context"
import { useContext } from "react"
import { uid } from "uid"

const ColorAndTitle = (props) => {
  const [colorShow, setColorShow] = useState(false)
  const [newColor, setNewColor] = useState(props.color)
  const [title, setTitle] = useState(props.title)
  const diVRef = useRef(null)
  const Ctx = useContext(CartCtxTF)
  const UserUid = Ctx.RegisterUuid
  const columnID = Ctx.UpdateValue.ColumnId
  const cardUuid = Ctx.UpdateValue.uuid

  const handleClickOutside = (event) => {
    let p = event.target
    let pa = p.className;

    if (pa !== 'Paraf') {
      setColorShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const showColor = () => {
    setColorShow(true)
  }

  const handleChange = (color) => {
    setNewColor(color.hex)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  useEffect(() => {
    update(ref(db, `/${UserUid}/${columnID}/Names/${cardUuid}/Labels/${props.uuid}`), {
      title: title,
      color: newColor,
      uuid: props.uuid
    })
  }, [title, newColor])

  return (
    <div onClick={showColor} className={Classes.main}>
      <input
        className="Paraf"
        style={{ backgroundColor: newColor, border:'none', width:'60px' }}
        type="text"
        defaultValue={title}
        onChange={handleTitleChange}
      />
      <DelleteField UpdateModal={props.UpdateModal} uuid={props.uuid} />
      <div ref={diVRef} className={Classes.ColorPicker}>
        {colorShow && <ChromePicker color={newColor} onChange={handleChange} />}
      </div>
    </div>
  )
}

export default ColorAndTitle

