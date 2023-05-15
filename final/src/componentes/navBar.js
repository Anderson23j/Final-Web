import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  const navRef = useRef();
  const showNavar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>Taller M&A</h3>
      <nav ref={navRef}>
        <ul>
          <li className="li">
            <Link to={"/"} className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/servicio"} className="link">
              Servicio
            </Link>
          </li>
          <li>
            <Link to={"/sedes"} className="link">
              Sedes
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className="link">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/nosotros"} className="link">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to={"/contacto"} className="link">
              contacto
            </Link>
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNavar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
