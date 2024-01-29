

const Projects = () => {
    return (
        <section id="projects">
            <h3 id="projects-header">Recent Projects</h3>
            <section id="project-links">
                <section id="project1">
                    <a href="https://calm-candle-shop.onrender.com/" target="_blank" rel="noopener noreferrer"><img className="project-image" src="src/assets/Screenshot 2023-08-04 at 5.09.14 PM (2).png"></img></a>
                    <h4><a href="https://calm-candle-shop.onrender.com/" className="project-title" target="_blank" rel="noopener noreferrer">Calm Candle Shop</a></h4>
                    <div className="project-description">
                        <p>Full-Stack MEAN Application</p>
                        <p>HTML, CSS, TypeScript, Angular, MongoDB, Mongoose    08/2023</p>
                    <ul>
                        <li>Built frontend in Angular and TypeScript</li>
                        <li>Backend API built using MongoDB, Mongoose, Express, and Node JS</li>
                        <li>Incorporates bcrypt and login authentication for secure login and password hashing</li>
                        <li>Incorporates Stripe for secure handling of user credit card information</li>
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
                    </ul>
                    </div>
                </section>
                 <section id="project3">
                    <a href="https://cozy-game-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                        <img className="project-image" src="src/assets/CatIslandImage.png" alt="Cat Island Game Project Screenshot" /></a>
                    <h4><a href="https://cozy-game-production.up.railway.app/" className="project-title" target="_blank" rel="noopener noreferrer">Cat Island Game</a></h4>
                    <div className="project-description">
                        <p>Interactive Javascript Game</p>
                        <p>HTML, CSS, JavaScript, Tiled 	05/2023</p>
                    <ul>
                        <li>Used Vanilla JavaScript to create a fun Pokemon-style game where users can explore Cat Island and engage in battles with other cats</li>
                        <li>Created game logic in JavaScript and used Tiled software and HTML canvas to create an interactive game map</li>
                        <li>Used HTML and CSS to style and animate characters and add different battle attacks</li>
                    </ul>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Projects