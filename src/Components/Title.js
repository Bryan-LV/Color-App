import React from 'react'

function Title({ paletteName, emoji }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <h3 className="text-2xl pr-4 py-6">{paletteName}</h3>
      <h3 className="text-xl">{emoji}</h3>
    </div>
  )
}

export default Title
