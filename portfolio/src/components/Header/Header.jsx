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
        <li className="nav-item dropdown">
            {/* <Link to="/projects" className="nav-link dropdown-toggle">Projects</Link> */}
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/projects/1" className="nav-link dropdown-item">Wallet Wizard</Link></li>
            <li><Link to="/projects/2" className="nav-link dropdown-item">Weather Dashboard</Link></li>
            <li><Link to="/projects/3" className="nav-link dropdown-item">Daily Planner</Link></li>
            <li><Link to="/projects/4" className="nav-link dropdown-item">Sign-Up Form</Link></li>
            <li><Link to="/projects/5" className="nav-link dropdown-item">Coding Quiz</Link></li>
            <li><Link to="/projects/6" className="nav-link dropdown-item">Calculator</Link></li>
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