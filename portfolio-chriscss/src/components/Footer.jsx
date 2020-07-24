import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-one">
                <h4>Menu</h4>
                <Link to="/">
                    <h5>Home</h5>
                </Link>
                <Link to="/">
                    <h5>Portfolio</h5>
                </Link>
                <Link to="/">
                    <h5>Contact</h5>
                </Link>
                <Link to="/">
                    <h5>Legal Notice</h5>
                </Link>
            </div>

            <div className="footer-two">
                <div>
                    <h4>Contact</h4>
                    <Link to="/">
                        <h5>christelle.savoca@gmail.com</h5>
                    </Link>
                </div>
                <div className="footer-icon">
                    <Link to="/">
                        <i class="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="/">
                        <i class="fab fa-github"></i>
                    </Link>
                </div>
            </div>
            <div className="footer-three">
                <h5>Created with love by Christelle Savoca - July 2020</h5>
            </div>
        </div>
    );
};

export default Footer;
