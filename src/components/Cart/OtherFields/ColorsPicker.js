import { useState } from "react";
import { ChromePicker } from "react-color";
import { db } from "../../../Firebase/firebase";
import { ref, update } from "firebase/database";
import { useContext } from "react";
import CartCtxTF from "../../Store/auth-context";
import { uid } from "uid";

function ColorInput(props) {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(props.defaultColor);
  const [title, setTitle] = useState('');
  const Ctx = useContext(CartCtxTF);
  const columnID = Ctx.UpdateValue.ColumnId;
  const UserUid = Ctx.RegisterUuid;
  const cardUuid = Ctx.UpdateValue.uuid;
  const ColorUid = uid();

  // Handle color change in the color picker
  const handleChange = (newColor) => {
    setColor(newColor.hex);
    props.onChange(newColor.hex);
  };

  // Handle input text change for title
  const InputTextHandler = (e) => {
    setTitle(e.target.value);
  };

  // Save the selected color and title
  const onSavePicker = () => {
    update(ref(db, `/${UserUid}/${columnID}/Names/${cardUuid}/Labels/${ColorUid}`), {
      title: title,
      color: color,
      uuid: ColorUid
    });
    setShowPicker(false);
  };

  return (
    <div>
      {/* Input field for title */}
      <input
        onChange={InputTextHandler}
        type="text"
        onClick={() => setShowPicker(true)}
        style={{ backgroundColor: color }}
      />
      {/* Display color picker when showPicker is true */}
      {showPicker && (
        <div>
          {/* ChromePicker component */}
          <ChromePicker color={color} onChange={handleChange} />
          {/* Save button */}
          <button onClick={onSavePicker}>Save</button>
        </div>
      )}
    </div>
  );
}

export default ColorInput;