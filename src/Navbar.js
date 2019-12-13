import React, {useState} from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css'
import './navbar.css'

export default function Navbar(props) {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    props.handleFormat(e.target.value);
  }

  const handleSnackbarClose = (e) => {
    setOpen(false)
  }

  return (
    <header>
    <nav>
      <div className="logo">
        <a href="#" className="logo-brand">React Color Palette</a>
      </div>
      <div className="slider-container">
        <span>Level: {props.level}</span>
        <div className="slider">
          <Slider defaultValue={props.level} min={100} max={900} step={100} onAfterChange={props.changeLevel}/>
        </div>
      </div>
      <div className="select-container">
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
