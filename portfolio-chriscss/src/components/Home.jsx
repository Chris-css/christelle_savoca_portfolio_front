import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skills from "./Skills";
import PortfolioButton from "./PortfolioButton";
import photoJpg from "../../src/images/portraitchris.jpg";
import cv from "../../src/images/Christelle_Savoca_Développeuse_React.pdf";

import "../style/Home.css";

const Home = () => {
    const [developpers, setDeveloppers] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/developpers")
            .then((res) => res.data)
            .then((data) => setDeveloppers(data));
    }, []);

    return (
        <div className="home-box">
            {developpers.map((developper) => (
                <>
                    <h1>Hello World !</h1>

                    <div className="profile-box">
                        <h2>
                            I’m Christelle SAVOCA a french Fullstack developer
                            based in Bordeaux.
                        </h2>
                        <img
                            className="photo"
                            src={photoJpg}
                            alt={developper.firstname}
                        />
                    </div>
                    <div className="available-box">
                        {developper.available ? (
                            <p>
                                I’m looking for a job and I’m available in{" "}
                                {developper.availabledate}.
                            </p>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="info-box">
                        <div className="info-box-1">
                            <h2 id="info">What I love ?</h2>
                            <p>Build home made and scalable code.</p>
                            <p>Learn new skills.</p>
                        </div>
                        <div className="info-box-2">
                            <h2>What I like to do ?</h2>
                            <p>Front-end and back-end developement.</p>
                            <p>Responsive Design.</p>
                        </div>
                        <div className="scroll_conteneur">
                            <a href="#info" className="scroll">
                                Scroll down
                            </a>
                        </div>
                    </div>
                    <div className="title">
                        <h2>Skills</h2>
                    </div>

                    <Skills />
                    <Link to={cv} className="cv-box" target="_blank">
                        <h5>Download my curriculum vitae (Pdf)</h5>
                        <i className="fas fa-download"></i>
                    </Link>
                    <PortfolioButton />
                </>
            ))}
        </div>
    );
};

export default Home;
