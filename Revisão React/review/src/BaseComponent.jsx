import { Outlet } from "react-router-dom"

// Link entre paginas
import { Navbar } from "./components/Navbar"

// Search Params
import { SearchForm } from "./components/SearchForm"

export const BaseComponent = () => {
  return (
    <div>
        <Navbar/>
        <SearchForm/>
        <Outlet/>
        <p>Componente base - Footer</p>
    </div>
  )
}
