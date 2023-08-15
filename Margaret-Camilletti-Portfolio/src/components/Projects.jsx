import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <section id="projects">
            <h3 id="projects-header">Recent Projects</h3>
            <section id="project-links">
                <section id="project1">
                    <Link to="https://walksafenyc.netlify.app/" target="_blank"><img className="project-image" src="src/assets/Screenshot 2023-07-21 at 2.35.15 PM.png"/></Link>
                    <Link class="project-title" to="https://walksafenyc.netlify.app/" target="_blank"><p>WalkSafe NYC</p></Link>
                    <p className="project-description">Full-Stack React Application<br></br>
                    HTML, CSS, JavaScript, React, MongoDB, Mongoose  	07/2023<br></br>
                    <ul><li>Worked on a team of four developers to create a full-stack mobile-optimized application using React that maps and tracks instances of street harassment and catcalling in New York City so you can walk safely through the five boroughs.</li>
                    <li>Set up and tested backend CRUD using Thunderclient and frontend CRUD for user accounts and reports of harassment, set up React components and routes, created all React forms and set up user authentication, set up persistent login functionality</li>
                    <li>Link to deployed application: <a class="resume-links" href="https://walksafenyc.netlify.app/" target="_blank">https://walksafenyc.netlify.app/</a></li></ul></p>
                </section>
                <section id="project2">
                    <Link to="https://art-trivia-game.io" target="_blank"><img className="project-image" src="src/assets/Screenshot 2023-07-23 at 7.40.55 PM.png"/></Link>
                    <Link class="project-title" to="https://art-trivia-game.io" target="_blank"><p>Art Trivia Game</p></Link>
                    <p className="project-description">Full-Stack Web Application<br></br>
                    Mongoose, MongoDB, Node, Express, HTML, CSS, JavaScript	06/2023<br></br>
                    <ul><li>Built backend MongoDB database for an interactive website that allows users to review and rate movies about disability based on each film’s quality of disability representation, set up and tested backend CRUD using Thunderclient as well as frontend CRUD for movies, actors, and reviews</li>
                    <li>Used Mongoose to define schemas for MongoDB collections</li>
                    <li>Created fully interactive and accessible front-end for the website up to the standard of WCAG using CSS3 and flexbox layout</li>
                    <li>Link to deployed application: <a class="resume-links" href="https://disabilityscene.com" target="_blank">https://disabilityscene.com</a></li></ul></p>
                </section>
                <section id="project3">
                    <Link to="https://disabilityscene.com" target="_blank"><img className="project-image" src="src/assets/Screenshot 2023-08-06 at 4.11.42 PM.png"/></Link>
                    <Link class="project-title" to="https://disabilityscene.com" target="_blank"><p>Disability Scene</p></Link>
                    <p className="project-description">Interactive Javascript Game<br></br>
                    Node.js, HTML, CSS, JavaScript 	05/2023<br></br>
                    <ul><li>Utilized the Art Institute of Chicago’s API, Axios, and Vanilla JavaScript to create a trivia game where users have to guess the artist based on the painting.</li>
                    <li>Created game logic in JavaScript and pulled data from the API using Axios to populate multiple choice questions and information about each painting, included randomizing multiple choice functionality and score counter</li>
                    <li>Created a professionally-styled front-end using HTML and CSS</li>
                    <li>Link to deployed application: <a class="resume-links" href="https://art-trivia-game.io/" target="_blank">https://art-trivia-game.io/</a></li></ul></p>
                </section>
            </section>
        </section>
    )
}

export default Projects