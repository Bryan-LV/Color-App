import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export default function MiniPalette(props) {
  const {name, emoji, colors, id} = props;

  const createMiniPalette = () => {
    return colors.map(color => <div className="mini-color-palette-box" style={{backgroundColor:color.color}}></div>)
  }
  return (
    <div className="mini-palette-container">
      <Link to={`/palette/${id}`}>
        <div className="mini-color-palette">
          {createMiniPalette()}
        </div>
        <div className="mini-color-info">
          <h2 className="mini-color-title">{name}</h2>
          <h2 className="mini-color-emoji">{emoji}</h2>
        </div>
      </Link>
    </div>
  )
}
