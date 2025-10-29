
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
 
  return (
    <nav className="navbar">
        <NavLink to='/'>
       <img src="../logo2.gif" alt="logo animado" class= "logo"/>
       </NavLink>
       <ul className="nav-links">
         <li ><Link to="/" >Inicio </Link  ></li>
         <li><Link to="/servicios">Servicios</Link></li>
         <li><Link to="/nosotros"> Nosotros</Link></li>
         <li><Link to="/contacto">Contacto</Link></li>
       </ul>
    </nav>

  ) ;
 
}

export default Navbar;

