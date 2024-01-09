import React from 'react'
import "./project.css"
import Header from '../Header/Header';


function Project(props){
    return (
        <>
        <Header />
        <div className="card">
          <div className="img-container">
            <img className="image" alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Link:</strong> <a href={props.link} target="_blank">Click Here!</a>
              </li>
              <li>
                <strong>GitHub Repository:</strong> <a href={props.github} target="_blank">Click Here!</a>
              </li>
              <li>
                <strong>Description:</strong> {props.description}
              </li>
            </ul>
          </div>
        </div>
        </>
      );
}



export default Project