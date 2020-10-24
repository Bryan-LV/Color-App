import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import DraggableColorBox from '../Components/DraggableColorBox';

export default function NewPalette(props) {
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('');
  const [newColorName, setNewColorName] = useState('');
  const [colorPalette, setColorPalette] = useState([]);

  const handleValidationSubmit = (evt) => {
    evt.preventDefault();
    const newColor = { name: newColorName.toLowerCase(), color: currentColor };
    setColorPalette([...colorPalette, newColor]);
  }

  const handleSavePalette = () => {
    // use callback to pass palette up to app.js
    const newName = 'New Palette';

    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, '-'),
      colors: colorPalette
    }

    props.saveNewPalette(newPalette);
    props.history.push('/');
  }

  return (
    <div className="">
      <button >Go Back</button>
      <button onClick={handleSavePalette}>Save Palette</button>
      <div>
        <button variant="contained" color="secondary"> Clear Palette </button>
        <button variant="contained" color="primary"> Random Color </button>
      </div>
      <ChromePicker color={currentColor} onChangeComplete={(color) => setCurrentColor(color.hex)} />

      <form onSubmit={handleValidationSubmit}>
        <input
          type="text"
          value={newColorName}
          onChange={(e) => setNewColorName(e.target.value)}
        />
        <button type="submit" style={{ backgroundColor: currentColor }}  >
          Add Color
        </button>
      </form>

      <main>
        <div className="" />
        {
          colorPalette.map(color => {
            return <DraggableColorBox color={color.color} name={color.name} />
          })
        }
      </main>
    </div>
  );
}
