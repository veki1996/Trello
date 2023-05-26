import { useState } from "react";
import ColorInput from "./ColorsPicker";
function CustomFields() {
    const [colors, setColors] = useState([]);

  // Add a new color to the list
    const handleAddColor = () => {
      setColors([...colors, "#70FF00"]);
    };
  // Handle color change for a specific index
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