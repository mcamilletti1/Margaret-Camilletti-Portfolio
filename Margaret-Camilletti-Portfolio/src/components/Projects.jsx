import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <section id="projects">
            <h3 id="projects-header">Recent Projects</h3>
            <section id="project-links">
                <section id="project1">
                    <Link to="https://walksafenyc.netlify.app/" target="_blank"><img className="project-image" src="src/assets/Screenshot 2023-07-21 at 2.35.15 PM.png"/></Link>
                    <Link class="project-title" to="https://walksafenyc.netlify.app/" target="_blank"><p>WalkSafe NYC</p></Link>
                </section>
                <section id="project2">
                    <Link to="https://art-trivia-game.io" target="_blank"><img className="project-image" src="src/assets/Screenshot 2023-07-23 at 7.40.55 PM.png"/></Link>
                    <Link class="project-title" to="https://art-trivia-game.io" target="_blank"><p>Art Trivia Game</p></Link>
                </section>
                <section id="project3">
                    <Link to="https://disabilityscene.com" target="_blank"><img className="project-image" src="src/assets/Screenshot 2023-08-06 at 4.11.42 PM.png"/></Link>
                    <Link class="project-title" to="https://disabilityscene.com" target="_blank"><p>Disability Scene</p></Link>
                </section>
            </section>
        </section>
    )
}

export default Projects