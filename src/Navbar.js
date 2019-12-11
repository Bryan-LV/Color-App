import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './navbar.css'

export default function Navbar(props) {
  return (
    <nav>
      <div className="logo">
        <a href="#" className="logo-brand">React Color Palette</a>
      </div>
      <div className="slider-container">
        <span>Level: {props.level}</span>
        <div className="slider">
          <Slider defaultValue={props.level} min={100} max={900} step={100} onAfterChange={props.changeLevel}/>
        </div>
      </div>
    </nav>
  )
}
