import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logoSvg from "../../src/logo.svg";
import "../style/NavBar.css";

function NavBar() {
    const [developpers, setDeveloppers] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/developpers")
            .then((res) => res.data)
            .then((data) => setDeveloppers(data));
    }, []);

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
            {developpers.map((developper) => (
                <>
                {developper.available ? (
            <Link to="/contact">available for hire</Link>
            ) : (
                            ""
                        )}
            <Link to="/burger">
                <div className="menu-icon-box">
                    <i className="fas fa-bars"></i>
                </div>
            </Link>
            </>
            ))}
            </div>
            
        </nav>
    );
}

export default NavBar;
