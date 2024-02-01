import { NavLink } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
    return(
        <nav id="navbar">
            <h2>Party Time!</h2>
            <ul>
                <li>
                    <NavLink className="link-parties" to="/">Minhas Festas</NavLink>
                </li>
                <li>
                    <NavLink to="/party/new" className="btn">Criar Festa</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar