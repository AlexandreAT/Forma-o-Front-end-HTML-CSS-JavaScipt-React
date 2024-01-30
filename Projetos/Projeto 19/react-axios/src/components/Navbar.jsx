import { Link } from "react-router-dom"

import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>
        <ul>
            <li><Link to={`/`} className="link">Home</Link></li>
            <li><Link to={`/new`} className="new-btn">Novo Poste</Link></li>
            <li><Link to={`/admin`} className="link">Gerenciar</Link></li>
        </ul>
    </nav>
  )
}
