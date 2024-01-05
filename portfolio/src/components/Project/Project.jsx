import React from 'react'

function Project(props){
    return (
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Link:</strong> {props.link}
              </li>
              <li>
                <strong>Description:</strong> {props.description}
              </li>
            </ul>
          </div>
        </div>
      );
}

export default Project