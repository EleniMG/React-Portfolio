import React from "react"
import projectData from "../Project/project.json"
import Project from "../Project/Project"
import { useParams } from "react-router-dom";

function HighlightedProject() {
    const { id } = useParams();
    const highlightedProject = projectData.find((project) => Number(id) === project.id)
    
    if (!highlightedProject) {
        return <p>No project with this id</p>
    }
    
    return (
        <Project
            name={highlightedProject.name} 
            image={highlightedProject.image}
            description={highlightedProject.description}
            github={highlightedProject.github}
            link={highlightedProject.link}
        />
    )
}

export default HighlightedProject