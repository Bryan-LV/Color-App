import React, { useState } from 'react'
import NewPaletteColor from '../Forms/NewPaletteColor'
import useToggle from '../Hooks/useToggle'
import checkLum from '../Utils/checkLuminosity';

function NewPalette(props) {
  const [isOn, setToggle] = useToggle(false);
  const [editNameInput, toggleEditNameInput] = useToggle(false);
  const [paletteColorName, setPaletteColorName] = useState('Name Your Palette');
  const [newPaletteColors, setNewPaletteColors] = useState([]);

  const addToColorPalette = (colorObj) => {
    setNewPaletteColors(prevState => [...prevState, colorObj]);
  }

  const editPaletteName = () => {
    toggleEditNameInput();
  }

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      toggleEditNameInput();
    }
  }

  const handleSaveNewPalette = (paletteObj) => {
    props.saveNewPalette({
      paletteName: paletteColorName !== 'Name Your Palette' ? paletteColorName : 'Your Palette',
      id: paletteColorName.toLowerCase().replace(/ /g, '-'),
      ...paletteObj
    })
  }

  const clearPalette = () => {
    setNewPaletteColors([]);
  }


  return (
    <div className="md:grid md:grid-cols-4">
      <div className={`bg-gray-200 md:h-screen ${isOn ? 'md:w-full' : 'md:w-16'}`}>
        <div className=" cursor-pointer py-4 px-3" onClick={setToggle}>
          <div className="h-1 w-10 bg-gray-800"></div>
          <div className="h-1 w-10 bg-gray-800 mt-1"></div>
          <div className="h-1 w-10 bg-gray-800 mt-1"></div>
        </div>
        <div className={`${isOn ? 'block' : ' hidden'}`}>
          <NewPaletteColor addToColorPalette={addToColorPalette} saveNewPalette={handleSaveNewPalette} clearPalette={clearPalette} history={props.history} />
        </div>
      </div>

      <div className="col-span-3">
        {editNameInput ?
          (<div className="flex-center mx-2 my-2">
            <input className="w-full border-gray-200 border-2 p-2 tracking-wide rounded-md" type="text" value={paletteColorName} onKeyUp={handleEnterPress} onChange={({ target }) => setPaletteColorName(target.value)} />
            <button className="mx-1" onClick={editPaletteName}><svg className="w-6 h-6" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
          </div>)
          : (
            <div className="flex-center mx-2 my-2">
              <h1 className="text-lg md:text-xl text-center py-3 tracking-wide">{paletteColorName}</h1>
              <button className="mx-1" onClick={editPaletteName}><svg className="w-6 h-6" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
            </div>
          )
        }
        <div className="md:grid md:grid-cols-3 gap-2 m-2">
          {newPaletteColors.map(color => {
            return <div className="w-full h-48 cursor-pointer rounded-sm flex flex-row justify-start items-end" style={{ backgroundColor: color.color }}>
              <p className={`pb-1 pl-2 ${checkLum(color.color)}`}>{color.name}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default NewPalette
