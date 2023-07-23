import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <section id="projects">
            <h3>Recent Projects</h3>
            <Link to="https://walksafenyc.netlify.app/" target="_blank"><img class="project-image" src="src/assets/Screenshot 2023-07-21 at 2.35.15 PM.png"/></Link>
            <Link class="project-title" to="https://walksafenyc.netlify.app/" target="_blank"><p>WalkSafe NYC</p></Link>
        </section>
    )
}

export default Projects