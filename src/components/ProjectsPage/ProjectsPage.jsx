import React from 'react'
import Project from '../Project/Project';
import data from "../Project/project-data.js"
import { Link } from 'react-router-dom';


function ProjectsPage(){
    return (
        data.map((project) => (
            <Link to={`/projects/${project.id}`}>
            <Project
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                github={project.github}
                link={project.link}
            />
            </Link> 
        ))
      );
}

export default ProjectsPage