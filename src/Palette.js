import React, {useState} from 'react'
import Colorbox from './Colorbox'
import './palette.css'
import Navbar from './Navbar';


export default function Palette(props) {
  // level of color shade
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const handleFormat = (state) => {
    setFormat(state);
  }
  
  const changeLevel = (level) => {
    setLevel(level);
  }

  // looping through a certain level of colors
  const colors = () => {
    const allColors = props.palette.colors[level].map(color => {
        return <Colorbox format={color[format]} name={color.name} background={color[format]}/>
    })
    return allColors
  }



  return (
    <div className="palette">
      <Navbar level={level} changeLevel={changeLevel} handleFormat={handleFormat}/>
      <div className="palette-colors">{colors()}</div>
    </div>
  )
}
