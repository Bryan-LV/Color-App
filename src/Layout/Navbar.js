import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css'
import '../navbar.css'
import monster from '../Assets/monster.svg'

export default function Navbar(props) {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);
  const [slider, setSlider] = useState(true);

  useEffect(() => {
    setSlider(props.slider)
  }, [props.slider])

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    props.handleFormat(e.target.value);
  }

  const handleSnackbarClose = (e) => {
    setOpen(false)
  }

  const createSlider = () => {
    const sliderComponent = <div>
      <span>Level: {props.level}</span>
      <div className="slider">
        <Slider defaultValue={props.level} min={100} max={900} step={100} onAfterChange={props.changeLevel} />
      </div>
    </div>
    if (slider) {
      return sliderComponent
    }
    else {
      return null;
    }
  }

  return (
    <header className="pt-20 pb-4 md:py-4 px-10">
      <nav className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
        <div className="">
          <Link to="/" className="flex flex-row items-start block">
            <img className="h-12 w-12 block" src={monster} alt="" />
            <h1 className="text-3xl">Spiral</h1>
          </Link>
        </div>
        <div className="slider-container py-2 md:py-0 mx-2 w-11/12">
          {createSlider()}
        </div>
        <div className="select-container mb-6 md:pb-0">
          <Select value={format} onChange={handleFormatChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </nav>
      <div className="">
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{`Color Format: ${format.toUpperCase()}`}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    </header>
  )
}
