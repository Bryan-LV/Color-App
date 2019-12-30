import React, {useState} from 'react'
import ShadeColorBox from './ShadeColorBox';
import Colorbox from './Colorbox'
import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from 'react-router-dom'
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

  const handleFormat = (state) => {
    setFormat(state);
  }

  const handleBackBtn = () => {
    // get previous page
    props.history.goBack();
    // 
  }

  return (
    <div className="single-palette-colors">
      <Navbar slider={false} handleFormat={handleFormat}/>
        <div className="single-palette-colors-wrapper">
          {generateColorBoxes()}
          <div className="go-back"><Link onClick={handleBackBtn}><h2>Go Back</h2></Link></div>
        </div>
        <Footer name={palette.paletteName} emoji={palette.emoji}/>
    </div>
  )
}
