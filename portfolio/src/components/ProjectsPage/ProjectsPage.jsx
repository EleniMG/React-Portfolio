import React from 'react'
import Project from '../Project/Project';
import projectData from "../Project/project.json"
import { Link } from 'react-router-dom';


function ProjectsPage(){
    return (
        projectData.map((project) => (
            <Link to={`/project/${project.id}`}>
            <Project
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                link={project.link}
            />
            </Link> 
        ))
      );
}

export default ProjectsPage