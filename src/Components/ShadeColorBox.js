import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function ShadeColorBox(props) {
  const {color, name } = props;

  return (
    <div className={`shade-color-box`} style={{backgroundColor: color}}>
      <CopyToClipboard text={color}>
        <span>{name}</span>
      </CopyToClipboard>
    </div>
  )
}
