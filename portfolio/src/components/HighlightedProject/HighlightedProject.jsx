import React from "react"
import projectData from "../Project/project.json"

function HighlightedProject() {
    // const highlightedProject = projectData.find((id) => id = {props.id})
    
    if (id === 1){
        return (
            <Project
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                link={project.link}
            />
        )
    }

    // return (
    //     highlightedProject
    // )
}

export default HighlightedProject