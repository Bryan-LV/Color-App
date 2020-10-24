import React, { useState } from 'react'
import Colorbox from '../Components/Colorbox'
import Navbar from '../Layout/Navbar';
import { Link } from 'react-router-dom';
import Title from '../Components/Title';


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
      return <Colorbox format={color[format]} name={color.name} background={color[format]} isMore={true} singleURL={`/palette/${props.palette.id}/${color.id}`} />
    })
    return allColors
  }

  return (
    <div className="">
      <Navbar level={level} changeLevel={changeLevel} handleFormat={handleFormat} slider={true} />
      <Title paletteName={props.palette.paletteName} emoji={props.palette.emoji} />
      <div className="md:grid md:grid-cols-3 gap-2 mx-2">
        {colors()}
        <div className="">
          <Link to="/">
            <h2 className="bg-gray-800 text-white text-2xl h-full rounded-sm flex flex-col justify-center items-center">Go Back</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
