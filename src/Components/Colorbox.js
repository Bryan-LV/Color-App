import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
import checkLum from '../Utils/checkLuminosity';
import '../Styles/colorbox.css'

export default function Colorbox(props) {
  const [copy, setCopy] = useState(false);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    // used to check if color palette is rendering full color palettes or a single color shade palette
    setIsMore(props.isMore);
  }, [props.isMore])

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 1200);
  }

  const showOverlay = copy ? 'show' : '';
  const showMore = isMore ? 'see-more' : 'hide-more';
  const textColor = checkLum(props.background);

  return (
    <CopyToClipboard text={props.background} onCopy={handleCopy}>
      <div className="w-full h-48 relative cursor-pointer rounded-sm" style={{ backgroundColor: props.background }}>
        <div style={{ backgroundColor: props.background }} className={`copy-overlay ${showOverlay}`}></div>
        <div className={`copy-msg ${showOverlay}`}>
          <h1>copied!</h1>
          <p className={textColor}>{props.background}</p>
        </div>
        <p className={showMore}><Link className="see-more-link" to={props.singleURL}>MORE</Link></p>
        <button className="copy-btn">Copy</button>
        <p className={`color-name ${textColor}`}>{props.name}</p>
      </div>
    </CopyToClipboard>
  )
}

