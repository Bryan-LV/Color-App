import React, {useState, useEffect} from 'react'
import './colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom'
import chroma from "chroma-js";

export default function Colorbox(props) {
  const [copy, setCopy] = useState(false);
  const [isMore, setIsMore] = useState(true);

  // ***** PROPS ******
  // background
  // format
  // singleURL
  // name
  // isMore
  // ******************//

  useEffect(() => {
    // check props if isMore is true or false
    // used to check if color palette is rendering full color palettes or a single color shade palette
    setIsMore(props.isMore);
  }, [])
  
  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 1200);
  }
  
  const showOverlay = copy ? 'show' : '';
  const showMore = isMore ? 'see-more' : 'hide-more';

  const checkLum = () => {
    // get background color
    const color = chroma(props.background).luminance();
    console.log('checkLum ran');
    // check if color is dark or light
    // if color is light, text is dark and vice versa
    // 0 = dark 1 = light
    // color luminance less than 0.3 text color should be white
    if(color >= 0.3){
      return 'text-dark'
    } else{
      return 'text-white'
    }
  }
  checkLum()
  return (
    <CopyToClipboard text={props.background} onCopy={handleCopy}>
      <div className="colorbox" style={{backgroundColor: props.background}}>
        <div style={{backgroundColor:props.background}} className={`copy-overlay ${showOverlay}`}></div>
        <div className={`copy-msg ${showOverlay}`}>
          <h1>copied!</h1>
          <p className={checkLum()}>{props.background}</p>
        </div>
        <p className={showMore}><Link className="see-more-link" to={props.singleURL}>MORE</Link></p>
        <button className="copy-btn">Copy</button>
        <p className={`color-name ${checkLum()}`}>{props.name}</p>
      </div>
    </CopyToClipboard>
  )
}

