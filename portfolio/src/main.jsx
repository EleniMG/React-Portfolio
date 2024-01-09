import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx"
import ProjectsPage from './components/ProjectsPage/ProjectsPage.jsx'

const router = createBrowserRouter([{path: "/", element: <App />}, {path: "/contact-me", element: <Contact />}, {path: "/projects", element: <ProjectsPage />}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
