import React from 'react'
import './shadeColorbox.css'


export default function ShadeColorBox(props) {
  const {color, name } = props;

  return (
    <div className={`shade-color-box`} style={{backgroundColor: color}}>
      <span>{name}</span>
    </div>
  )
}
