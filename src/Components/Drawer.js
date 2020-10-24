import React, {useState} from 'react'
import './drawer.css'
export default function Drawer() {
  const [open,setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <div className="drawer-wrapper">
      <div className="hidden-area">
        <h1>Hello there 😏</h1>
      </div>
      <div className="open-box-button" onClick={toggleDrawer}> {open ? 'Close' : 'Open'}</div>
    </div>
  )
}
