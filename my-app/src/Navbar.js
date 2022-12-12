import { NavLink } from "react-router-dom";
import Logo from './Logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/"><img src={Logo} className="navlogo" alt=""/></NavLink>
            <div className="navlinks">
                <NavLink to="/" className="navlink">Home</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;