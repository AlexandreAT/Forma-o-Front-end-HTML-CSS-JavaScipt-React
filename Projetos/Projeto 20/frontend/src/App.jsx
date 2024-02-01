import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

// Components
import Navbar from './components/Navbar'

import {ToastContainer} from "react-toastify"

// Styles
import './App.css';
import "react-toastify/dist/ReactToastify.css";

import React from 'react'
import { ThemeSwitch } from './components/ThemeSwitch';

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark"? "light" : "dark"));
    console.log("mudei");
  }

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className='App' id={theme}> 
          <ToastContainer/>
          <ThemeSwitch onClick={toggleTheme}/>
          <Navbar/>
          <Outlet/>
        </div>
      </ThemeContext.Provider>
  )
}

export default App
