import React from "react";
import logoSvg from "../logo.svg";
import "../style/Burger.css";

const NavBarBurger = () => {
    return (
        <nav className="navbarburger">
            <Link to="/">
                <img
                    src={logoSvg}
                    className="navbar-logo"
                    alt="logo Chris-css"
                />
            </Link>

            <Link to="/">
                <div className="burger-icon-box">
                    <i className="fas fa-bars"></i>
                </div>
            </Link>

        </nav>
    )
}