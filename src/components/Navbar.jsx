import { Link } from "react-router"
import "./Navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <Link className="navbar-brand" to="/"> Movie Recc </Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/pick">Pick Movies</Link>
                <Link to="/recommendations">Recommendations</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
} 

export default Navbar;