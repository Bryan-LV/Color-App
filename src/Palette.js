import React from 'react'
import Colorbox from './Colorbox'
import './palette.css'

export default function Palette(props) {

  const colors = () => {
    const allColors = props.palette.colors.map(color => {
        return <Colorbox name={color.name} background={color.color}/>
    })
    return allColors
  }

  return (
    <div className="palette">
      {/* Navbar goes here */}
      <div className="palette-colors">{colors()}</div>
      
      {/* Footer goes here */}
    </div>
  )
}
