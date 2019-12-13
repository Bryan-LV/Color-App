import React from 'react'
import './palette.css'

export default function Footer(props) {
  return (
    <footer>
      <h3 className="footer-title">{props.name}</h3>
      <span className="footer-emoji">{props.emoji}</span>
    </footer>
  )
}
