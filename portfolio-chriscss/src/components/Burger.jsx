import React from "react";
import { Link } from "react-router-dom";
import NavBarBurger from "./NavBarBurger";
import "../style/Burger.css";

const Burger = () => {
    return (
        <>
        <NavBarBurger />
        <div className="burger">
            <div className="link-burger">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/">
                    <h1>Portfolio</h1>
                </Link>
                <Link to="/">
                    <h1>Contact</h1>
                </Link>
            </div>
            <div className="contact-burger">
                <div className="burger-icon">
                    <Link to="/">
                        <i class="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="/">
                        <i class="fab fa-github"></i>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <h5>christelle.savoca@gmail.com</h5>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Burger;
