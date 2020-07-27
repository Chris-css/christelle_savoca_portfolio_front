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
                    <Link className="contact-title" to="/">
                        <h1>Home</h1>
                        <div className="citrus-icon"></div>
                    </Link>
                    <Link className="contact-title" to="/">
                        <h1>Portfolio</h1>
                        <div className="citrus-icon"></div>
                    </Link>
                    <Link className="contact-title" to="/contact">
                        <h1>Contact</h1>
                        <div className="citrus-icon"></div>
                    </Link>
                </div>
                <div className="contact-burger">
                    <div className="burger-icon">
                        <a
                            href="https://www.linkedin.com/in/christellesavoca/"
                            target="_blank"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Chris-css" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:christelle.savoca@gmail.com">
                            <h5>christelle.savoca@gmail.com</h5>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Burger;
