import React from 'react'
import Header from '../Header/Header'
import Form from './Form.jsx'
import "./Contact.css"

function Contact(){
    return (
        <>
        <Header />
        <div className='contact-section'>
            <h1>You can contact me here:</h1>
            <div className='socials-logos'>
                <a href="https://www.linkedin.com/in/eleni-giannopoulos/" target='_blank'><img src="./src/images/linkedin-logo-linkedin-icon-transparent-free-png.webp" alt="LinkedIn Logo" id="linkedin-logo"/></a>
                <a href="https://github.com/EleniMG" target='_blank'><img src="./src/images/github-logo.png" alt="GitHub Logo" id="github-logo" /></a>
            </div>
        </div>
        <div className="form-section">
            <Form />
        </div>
    </>
    )
    
}

export default Contact