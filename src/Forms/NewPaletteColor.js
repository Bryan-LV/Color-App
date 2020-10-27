import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Link } from 'react-router-dom';
import checkLum from '../Utils/checkLuminosity';

export default function NewPaletteColor(props) {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');
  const [newColorName, setNewColorName] = useState('');
  const [colorPalette, setColorPalette] = useState([]);
  const [error, setError] = useState('');

  const handleValidationSubmit = (evt) => {
    evt.preventDefault();
    if (newColorName === '') {
      setError('Give your color a name 🎨');
      setTimeout(() => setError(''), 3000)
      return;
    }
    const newColor = { name: newColorName.toLowerCase(), color: currentColor };
    setColorPalette([...colorPalette, newColor]);
    setNewColorName('');
    props.addToColorPalette(newColor)
  }

  const handleSavePalette = () => {
    // use callback to pass palette up to app.js
    const newPalette = {
      colors: colorPalette
    }

    props.saveNewPalette(newPalette);
    props.history.push('/');
  }

  const handleClearPalette = (e) => {
    const confirmDelete = window.confirm('Are you sure you want to delete palette');
    if (confirmDelete) {
      setColorPalette([]);
      props.clearPalette();
    } else {
      return;
    }
  }



  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4">
          <ChromePicker className="mx-auto rounded-sm" color={currentColor} onChangeComplete={(color) => setCurrentColor(color.hex)} />

          <form className="text-center" onSubmit={handleValidationSubmit}>
            <input
              type="text"
              value={newColorName}
              onChange={(e) => setNewColorName(e.target.value)}
              className="mt-2 rounded-sm p-2 text-gray-800 text-lg"
              placeholder="Color Name"
            />
            {error && <p className="text-red-600">{error}</p>}
            <button
              className={`block mx-auto mt-3 px-10 py-2 rounded-sm ${checkLum(currentColor)}`}
              type="submit"
              style={{ backgroundColor: currentColor }}  >
              Add Color </button>
          </form>
        </div>

        <div className="flex flex-col justify-between items-center">
          <button className="block mt-2 bg-teal-400 text-white py-2 px-8 rounded-sm" onClick={handleSavePalette}>Save Palette</button>
          <button className="block my-2 text-sm text-gray-600" onClick={handleClearPalette}> Clear Palette </button>
          <Link to="/" className="text-xl mb-2"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg></Link>
        </div>
      </div>
    </div>
  );
}
