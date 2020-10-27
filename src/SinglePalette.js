import React, { useState } from 'react'
import Colorbox from './Components/Colorbox'
import Navbar from './Layout/Navbar';
import { Link } from 'react-router-dom'
import Title from './Components/Title';

export default function SinglePalette(props) {
  const { palette } = props;
  const [format, setFormat] = useState('hex');

  const findColors = () => {
    // paletteColors is an object full of arrays
    const paletteColors = palette.colors;
    // gets the individual color name to find color in loop
    const singleColorName = props.match.params.colorId;
    const shades = [];
    // iterate through object, collect every shade of color id and create array
    for (let key in paletteColors) {
      // filter throught each array, find color.id === singleColorName
      const filterColors = paletteColors[key].filter(color => color.id === singleColorName);
      shades.push(...filterColors)
    }
    return shades;
  }

  const generateColorBoxes = () => {
    const shades = findColors();
    const colorBoxes = shades.map(shade => <Colorbox isMore={false} background={shade[format]} name={shade.name} />)
    return colorBoxes;
  }

  const handleFormat = (state) => {
    setFormat(state);
  }

  const handleBackBtn = () => {
    // get previous page
    props.history.goBack();
    // 
  }

  return (
    <div className="">
      <Navbar slider={false} handleFormat={handleFormat} />
      <Title paletteName={palette.paletteName} emoji={palette.emoji} />

      <div className="">
        <div className="md:grid md:grid-cols-3 gap-2 mx-2">
          {generateColorBoxes()}
          <div className="">
            <Link onClick={handleBackBtn}>
              <h2 className="bg-gray-800 text-white text-2xl h-48 rounded-sm flex flex-col justify-center items-center">Go Back</h2>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
