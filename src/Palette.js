import React, {useState} from 'react'
import Colorbox from './Colorbox'
import './palette.css'
import Navbar from './Navbar';


export default function Palette(props) {
  const [level, setLevel] = useState(500);

  const colors = () => {
    const allColors = props.palette.colors[level].map(color => {
        return <Colorbox name={color.name} background={color.hex}/>
    })
    return allColors
  }

  const changeLevel = (level) => {
    setLevel(level);
  }

  return (
    <div className="palette">
      <Navbar level={level} changeLevel={changeLevel}/>
      <div className="palette-colors">{colors()}</div>
    </div>
  )
}
