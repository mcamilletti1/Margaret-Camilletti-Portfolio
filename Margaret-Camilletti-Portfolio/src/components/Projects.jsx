

const Projects = () => {
    return (
        <section id="projects">
            <h3 id="projects-header">Recent Projects</h3>
            <section id="project-links">
                <section id="project1">
                    <a href="https://walksafenyc.netlify.app/" target="_blank" rel="noopener noreferrer"><img className="project-image" src="src/assets/Screenshot 2023-07-21 at 2.35.15 PM.png" alt="WalkSafe NYC Project Screenshot"/></a>
                    <h4><a href="https://walksafenyc.netlify.app/" className="project-title" target="_blank" rel="noopener noreferrer">WalkSafe NYC</a></h4>
                    <div className="project-description">
                        <p>Full-Stack React Application</p>
                        <p>HTML, CSS, JavaScript, React, MongoDB, Mongoose  	07/2023</p>
                    <ul>
                        <li>Worked on a team of four developers to create a full-stack mobile-optimized application using React that maps and tracks instances of street harassment and catcalling in New York City so you can walk safely through the five boroughs.</li>
                        <li>Set up and tested backend CRUD using Thunderclient and frontend CRUD for user accounts and reports of harassment, set up React components and routes, created all React forms and set up user authentication, set up persistent login functionality</li>
                        <li>Link to deployed application: <a className="resume-links" href="https://walksafenyc.netlify.app/" target="_blank"rel="noopener noreferrer">WalkSafe NYC</a></li>
                    </ul>
                    </div>
                </section>
                <section id="project2">
                    <a href="https://disabilityscene.com" target="_blank" rel="noopener noreferrer">
                        <img className="project-image" src="src/assets/Screenshot 2023-08-06 at 4.11.42 PM.png" alt="Disability Scene Project Screenshot" /></a>
                    <h4><a href="https://disabilityscene.com" className="project-title" target="_blank" rel="noopener noreferrer">Disability Scene</a></h4>
                    <div className="project-description">
                        <p>Full-Stack Web Application</p>
                        <p>Python, Django REST Framework, Node, Express, HTML, CSS, JavaScript, React, PostgreSQL	06/2023</p>
                    <ul>
                        <li>Built backend Django REST API database for an interactive website that allows users to review and rate movies about disability based on each film’s quality of disability representation, set up and tested backend CRUD using Thunderclient as well as frontend CRUD for movies, actors, and reviews</li>
                        <li>Used Django REST framework to define schemas for  PostgreSQL collections</li>
                        <li>Created fully interactive and accessible front-end for the website up to the standard of WCAG using CSS3 and flexbox layout</li>
                        <li>Link to deployed application: <a className="resume-links" href="https://disabilityscene.com" target="_blank" rel="noopener noreferrer">Disability Scene</a></li>
                    </ul>
                    </div>
                </section>
                <section id="project3">
                    <a href="https://art-trivia-game.io/" target="_blank" rel="noopener noreferrer">
                        <img className="project-image" src="src/assets/Screenshot 2023-07-23 at 7.40.55 PM.png" alt="Art Trivia Project Screenshot" /></a>
                    <h4><a href="https://art-trivia-game.io/" className="project-title" target="_blank" rel="noopener noreferrer">Guess the Artist</a></h4>
                    <div className="project-description">
                        <p>Interactive Javascript Game</p>
                        <p>Node.js, HTML, CSS, JavaScript 	05/2023</p>
                    <ul>
                        <li>Utilized the Art Institute of Chicago’s API, Axios, and Vanilla JavaScript to create a trivia game where users have to guess the artist based on the painting.</li>
                        <li>Created game logic in JavaScript and pulled data from the API using Axios to populate multiple choice questions and information about each painting, included randomizing multiple choice functionality and score counter</li>
                        <li>Created a professionally-styled front-end using HTML and CSS</li>
                        <li>Link to deployed application: <a className="resume-links" href="https://art-trivia-game.io/" target="_blank" rel="noopener noreferrer">Guess the Artist</a></li>
                    </ul>
                    </div>
                </section>
                <section id="project4">
                    <a href="https://calm-candle-shop.onrender.com/" target="_blank" rel="noopener noreferrer"><img className="project-image" src="src/assets/Screenshot 2023-08-04 at 5.09.14 PM (2).png"></img></a>
                    <h4><a href="https://calm-candle-shop.onrender.com/" className="project-title" target="_blank" rel="noopener noreferrer">Calm Candle Shop</a></h4>
                    <div className="project-description">
                        <p>Full-Stack MEAN Application</p>
                        <p>HTML, CSS, TypeScript, Angular, MongoDB, Mongoose    08/2023</p>
                    <ul>
                        <li>Built frontend in Angular and TypeScript</li>
                        <li>Backend API built using MongoDB, Mongoose, Express, and Node JS</li>
                        <li>Link to deployed application: <a className="resume-links" href="https://calm-candle-shop.onrender.com/" target="_blank" rel="noopener noreferrer">Calm Candle Shop</a></li>
                    </ul>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Projects