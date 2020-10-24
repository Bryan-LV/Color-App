import React from 'react'
import MiniPalette from '../Components/MiniPalette'
import { Link } from 'react-router-dom'
import monster from '../Assets/monster.svg'

export default function Home(props) {
  const { palettes } = props;

  const createMiniPalettes = () => {
    return palettes.map(palette => <MiniPalette name={palette.paletteName} emoji={palette.emoji} colors={palette.colors} id={palette.id} />)
  }

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center px-10 pt-4 pb-5 mb-4 rounded-b-sm">
        <div className="flex flex-row items-start">
          <img className="h-12 w-12 block" src={monster} alt="" />
          <h1 className="text-3xl">Spiral</h1>
        </div>
        <Link to="/palette/new" className="text-xl block">Create Palette</Link>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl m-auto gap-3">
        {createMiniPalettes()}
      </div>
    </div>
  )
}
