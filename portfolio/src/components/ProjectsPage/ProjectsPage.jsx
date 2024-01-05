import React from 'react'
import Project from '../Project/Project';
import projectData from "../Project/project.json"


function ProjectsPage(props){
    return (
        projectData.map((project) => (
            <Project
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                link={project.link}
            />
        ))
      );
}

export default ProjectsPage