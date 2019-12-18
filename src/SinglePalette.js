import React from 'react'
import ShadeColorBox from './ShadeColorBox';

export default function SinglePalette(props) {
  const {palette} = props;

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
    const colorBoxes = shades.map(shade => <ShadeColorBox color={shade.hex} name={shade.id}/>)
    return colorBoxes;
  }
  return (
    <div className="single-palette-colors">
      <h1>Singlecolor</h1>
      <div className="test">
        {generateColorBoxes()}
      </div>
    </div>
  )
}
