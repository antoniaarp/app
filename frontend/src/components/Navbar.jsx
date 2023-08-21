import {NavLink}from"react-router-dom"
import { FaUserCog } from 'react-icons/fa';
//import logo from"../ADMIN.png";

import '../style.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" 
      role="navigation" 
      aria-label="main navigation">
    
    <div className="navbar-brand">
         
        <NavLink  to="/dashboard" className="navbar-item" >
        <h1 className="title">
        <FaUserCog className="icon"color="'#8B4513'" style={{ marginRight: '10px'  }}/>
        <span style={{ marginLeft: '10px'  , color: '#8B4513' }}>ADMIN</span>
        </h1>
        </NavLink>

          <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          
    
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-light">
                  Salir
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
