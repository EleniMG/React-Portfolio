import React from 'react'
import Header from '../Header/Header'
import "./Homepage.css"
import curlyHairImage from '../../images/curly-hair.jpg'

function Homepage(){
    return (
        <div className='homepage'>
            <Header />
            
            <h1>Hello, there! 👋</h1>
            <h2>My name is Eleni Giannopoulos and I am a software developer. Welcome to my Portfolio, created with React.</h2>

            <p>I am a self-taught developer, with experience in using HTML, CSS, JavaScript, Regular Expressions, Bootstrap, jQuery, REST APIs, Node.js, of course, React!</p>

            <img src={curlyHairImage} alt="Curly-haired cartoon character" />
        </div>
    )
}

export default Homepage