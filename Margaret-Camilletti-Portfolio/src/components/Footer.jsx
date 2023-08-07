import { Link } from 'react-router-dom'


const Footer = () => {
    return (
       <footer className="app-footer">
        <Link className="nav" to="home" id="home-link" smooth={true} duration={500}>
          Margaret Camilletti
        </Link>
       </footer> 
    )
}

export default Footer