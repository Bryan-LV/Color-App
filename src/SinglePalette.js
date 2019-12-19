import React, {useState} from 'react'
import ShadeColorBox from './ShadeColorBox';
import Colorbox from './Colorbox'
import './singlePalette.css'

export default function SinglePalette(props) {
  const {palette} = props;
  const [format, setFormat] = useState('hex');

  const findColors = () => {
    // paletteColors is an object full of arrays
    const paletteColors = palette.colors;
    // gets the individual color name to find color in loop
    const singleColorName = props.match.params.colorId;
    const shades = [];
    // iterate through object, collect every shade of color id and create array
    for(let key in paletteColors){
      // filter throught each array, find color.id === singleColorName
      const filterColors = paletteColors[key].filter(color => color.id === singleColorName);
      shades.push(...filterColors)
    }
    return shades;
  }

  const generateColorBoxes = () => {
    const shades = findColors();
    const colorBoxes = shades.map(shade => <Colorbox isMore={false} background={shade[format]} name={shade.name}/>)
    return colorBoxes;
  }

  return (
    <div className="single-palette-colors">
        <div className="single-palette-colors-wrapper">
          {generateColorBoxes()}
        </div>
    </div>
  )
}
