import React, {useState} from 'react'
import './colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom'

export default function Colorbox(props) {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 1200);
  }

  const showOverlay = copy ? 'show' : '';

  return (
    <CopyToClipboard text={props.format} onCopy={handleCopy}>
      <div className="colorbox" style={{backgroundColor: props.background}}>
        <div style={{backgroundColor:props.background}} className={`copy-overlay ${showOverlay}`}></div>
        <div className={`copy-msg ${showOverlay}`}>
          <h1>copied!</h1>
          <p>{props.background}</p>
        </div>
        <p className="see-more"><Link className="see-more-link"to={props.singleURL}>MORE</Link></p>
        <button className="copy-btn">Copy</button>
        <p className="color-name">{props.name}</p>
      </div>
    </CopyToClipboard>
  )
}

