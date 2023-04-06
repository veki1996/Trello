import { useState } from "react";
import ColorInput from "./ColorsPicker";
function CustomFields() {
    const [colors, setColors] = useState([]);

    const handleAddColor = () => {
      setColors([...colors, "#70FF00"]);
    };
  
    const handleChangeColor = (index, newColor) => {
      const newColors = [...colors];
      newColors[index] = newColor;
      setColors(newColors);
    };
    return (
      <div>
        <button onClick={handleAddColor}>Labels</button>
        {colors.map((color, index) => (
          <ColorInput
            key={index}
            defaultColor={color}
            onChange={(newColor) => handleChangeColor(index, newColor)}
          />
        ))}
      </div>
    );
  }
  export default CustomFields