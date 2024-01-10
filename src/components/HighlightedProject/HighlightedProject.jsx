import React from "react"
import data from "../Project/project-data.js"
import Project from "../Project/Project.jsx"
import { useParams } from "react-router-dom";

function HighlightedProject() {
    const { id } = useParams();
    const highlightedProject = data.find((project) => Number(id) === project.id)
    
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