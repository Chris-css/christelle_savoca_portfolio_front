import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import map from "../images/map.png";
import "../style/Contact.css";

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="contact-box">
                <div className="contact-title">
                    <h1>Contact</h1>
                    <div className="citrus-icon"></div>
                </div>
                <h2>Interested in working with me ? Contact me !</h2>
                <div className="contact-link-box">
                    <div className="col-left">
                        <div className="contact-icon">
                            <a
                                href="https://www.linkedin.com/in/christellesavoca/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://github.com/Chris-css"
                                target="_blank"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <a href="mailto:christelle.savoca@gmail.com">
                            <p>christelle.savoca@gmail.com</p>
                        </a>
                    </div>
                    <div className="col-right">
                        <img
                            className="map"
                            src={map}
                            alt="carte de Bordeaux, Nouvelle Aquitaine"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
