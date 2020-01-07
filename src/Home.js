import React from 'react'
import MiniPalette from './MiniPalette'
import {Link} from 'react-router-dom'
import './Home.css'

  export default function Home(props) {
    const {palettes} = props;
    
    const createMiniPalettes = () => {
      return palettes.map(palette => <MiniPalette name={palette.paletteName} emoji={palette.emoji} colors={palette.colors} id={palette.id}/>)
    }

    return (
      <div className="home">
        <div className="home-container">
          <div className="home-nav">
            <h1 className="home-title">React Color Palette</h1>
            <h2 className="create-palette-link"><Link to="/palette/new">Create Palette</Link></h2>
          </div>
          <div className="palettes-container">
            {createMiniPalettes()}
          </div>
        </div>
      </div>
    )
  }
