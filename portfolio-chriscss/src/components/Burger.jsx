import React from "react";
import { Link } from "react-router-dom";
import "../style/Burger.css";

const Burger = () => {
    return (
        <div className="burger">
        <div className="link-burger">
        <h1>Home</h1>
        <h1>Portfolio</h1>
        <h1>Contact</h1>
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
    );
};

export default Burger;