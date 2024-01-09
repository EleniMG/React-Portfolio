import React from 'react'
import Header from '../Header/Header'
import "./Homepage.css"

function Homepage(){
    return (
        <div className='homepage'>
            <Header />
            
            <h1>Hello, there! 👋</h1>
            <h2>My name is Eleni Giannopoulos and I am a software developer. Welcome to my Portfolio, created with React.</h2>

            <img src="../../src/images/curly-hair.jpg" alt="Curly-haired cartoon character" />
        </div>
    )
}

export default Homepage