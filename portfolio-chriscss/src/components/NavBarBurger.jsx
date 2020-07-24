import React from "react";
import { Link } from "react-router-dom";

import logoSvg from "../logo.svg";
import "../style/Burger.css";

const NavBarBurger = () => {
    return (
        <nav className="navbarburger">
            <Link to="/">
                <img
                    src={logoSvg}
                    className="navbarburger-logo"
                    alt="logo Chris-css"
                />
            </Link>

            <Link to="/">
                <div className="burger-icon-box">
                    <i class="fas fa-times"></i>
                </div>
            </Link>
        </nav>
    );
};

export default NavBarBurger;