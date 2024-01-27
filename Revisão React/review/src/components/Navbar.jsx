import { Link, NavLink } from "react-router-dom"
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
        <span>Componente base - Navbar </span>
        {/* <Link to="/">Home </Link>
        <Link to="/contact">Contatos</Link> */}
        {/* Link ativo */}
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home </NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contatos</NavLink>
    </div>
  )
}
