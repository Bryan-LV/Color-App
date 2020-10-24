import React from 'react'
import { Link } from 'react-router-dom'

export default function MiniPalette(props) {
  const { name, emoji, colors, id } = props;

  const createMiniPalette = () => {
    return colors.map(color => <div className="h-6 w-full" style={{ backgroundColor: color.color }}></div>)
  }
  return (
    <div className="h-56 w-full max-w-xs rounded-sm shadow-sm mx-auto">
      <Link to={`/palette/${id}`}>
        <div className="grid grid-cols-4 rounded-sm overflow-hidden">
          {createMiniPalette()}
        </div>
        <div className="p-2">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <h2 className="mini-color-emoji">{emoji}</h2>
        </div>
      </Link>
    </div>
  )
}
