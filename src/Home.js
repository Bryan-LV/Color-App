import React from 'react'
import MiniPalette from './MiniPalette';
import './Home.css'

export default function Home(props) {
  const {palettes} = props;
  console.log(palettes);
  const createMiniPalettes = () => {
    return palettes.map(palette => <MiniPalette name={palette.paletteName} emoji={palette.emoji} colors={palette.colors} id={palette.id}/>)
  }

  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">React Color Palette</h1>
        <div className="palettes-container">
          {createMiniPalettes()}
        </div>
      </div>
    </div>
  )
}
