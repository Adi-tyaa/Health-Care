import React from 'react'
import '../componentStyles/Navbar.css'
import logo from '../images/logo.jpg'
export default function Navbar() {
  return (
    
    <header id="header">
      <div className="logo" id="logo">
        <img src={logo} alt="Car Logo" height="60px" width="180px" />
      </div>
      <nav className="nav" id="navbar">
        <ul>
          
          <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
          <li><a href="/" target="_blank" rel="noopener noreferrer">Pages</a></li>
          <li><a href="/" target="_blank" rel="noopener noreferrer">Services</a></li>
          <li><a href="/">Team</a></li>
          <li><a href="/" target="_blank" rel="noopener noreferrer">Features</a></li>
          <li><a href="/" target="_blank" rel="noopener noreferrer">Contact</a></li>
        </ul>
      </nav>

      <div className="signIn">
        <button id="signin" type="button">Sign In</button>
        <button id="register" type="button">Register</button>
      </div>
    </header>

    
  
  )
}
