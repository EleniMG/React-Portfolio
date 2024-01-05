import React from 'react'
import './Header.css'

function Header(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about-me">About Me</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Project 1</a></li>
            <li><a class="dropdown-item" href="#">Project 2</a></li>
            <li><a class="dropdown-item" href="#">Project 3</a></li>
            <li><a class="dropdown-item" href="#">Project 4</a></li>
            <li><a class="dropdown-item" href="#">Project 5</a></li>
            <li><a class="dropdown-item" href="#">Project 6</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact-me">Contact Me</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Header