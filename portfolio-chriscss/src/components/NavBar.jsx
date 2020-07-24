import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../../src/logo.svg";
import "../style/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img
                    src={logoSvg}
                    className="navbar-logo"
                    alt="logo Chris-css"
                />
            </Link>
            <div className="navbar-menu">
            <Link to="/">available for hire</Link>
            <Link to="/burger">
                <div className="menu-icon-box">
                    <i className="fas fa-bars"></i>
                </div>
            </Link>
            </div>  
        </nav>
    );
}

export default NavBar;
