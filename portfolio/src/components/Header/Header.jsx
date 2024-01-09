import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me">About Me</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Project 1</a></li>
            <li><a className="dropdown-item" href="#">Project 2</a></li>
            <li><a className="dropdown-item" href="#">Project 3</a></li>
            <li><a className="dropdown-item" href="#">Project 4</a></li>
            <li><a className="dropdown-item" href="#">Project 5</a></li>
            <li><a className="dropdown-item" href="#">Project 6</a></li>
          </ul>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/contact-me">Contact Me</a> */}
          <Link to="/contact-me" className='nav-link'>Contact Me</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Header