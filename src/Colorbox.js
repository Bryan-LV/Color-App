import React, { Component } from 'react'
import './colorbox.css'

export default class Colorbox extends Component {
  render() {
    return (
      <div className="colorbox" style={{backgroundColor: this.props.background}}>
        <p className="see-more">More</p>
        <button className="copy-btn">Copy</button>
        <p className="color-name">{this.props.name}</p>
      </div>
    )
  }
}
