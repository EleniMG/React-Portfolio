import React from "react"
import './App.css'
import Header from "../Header/Header.jsx"
import Homepage from "../Homepage/Homepage.jsx"
import Contact from "../Contact/Contact.jsx"
import ProjectsPage from "../ProjectsPage/ProjectsPage.jsx"
import Project from "../Project/Project.jsx"

function App() {

  return (
    <div>
      <Header />
      <Homepage />
      <ProjectsPage />
      <Project />
      <Contact />
    </div>
  )
}

export default App
