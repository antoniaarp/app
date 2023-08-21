import React from 'react'
import{NavLink}from "react-router-dom"
import {IoPerson,IoHome,IoLogOut} from "react-icons/io5"
import{FaTractor,FaClipboardList,FaFileAlt,FaSuitcase,FaListUl }from"react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
  <p className="menu-label">
    General
  </p>
  <ul className="menu-list">
    <li><NavLink to={"/dashboard"}><IoHome/>Dashboard</NavLink></li>
    <li><NavLink to={"/ordenes"}><FaClipboardList/>Ordenes</NavLink></li>
    

  </ul>
  <p className="menu-label"> Admin </p>
  <ul className="menu-list">
    <li><NavLink to={"/users"}><IoPerson/>Usuarios</NavLink></li>
   
    <li><NavLink to={"/maquinas"}><FaTractor/>Maquinas</NavLink></li>
    <li><NavLink to={"/proveedores"}><FaSuitcase/>Proveedores</NavLink></li>
    <li><NavLink to={"/ordenes"}><FaListUl/>Ordenes</NavLink></li>
    <li><NavLink to={"/reportes"}><FaFileAlt/>Reportes</NavLink></li>
    
  </ul>
  <p className="menu-label">
    Ajustes
  </p>
  <ul className="menu-list">
    <li><button className='button is-white'><IoLogOut/>Cerrar Sesion</button></li>
   
  </ul>
</aside>
    </div>
  )
}

export default Sidebar
