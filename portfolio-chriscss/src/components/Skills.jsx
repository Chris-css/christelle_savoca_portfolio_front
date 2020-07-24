import React from "react";
/*import axios from "axios";*/

import logoReact from "../images/react.png";
import logoNode from "../images/nodejs1.png";
import logoHtml5 from "../images/html5.png";
import logoCSS3 from "../images/css3.png";
import logoOpquast from "../images/issuer_1NQFRU.svg";
import logoGit from "../images/git.png";
import logoMysql from "../images/mysql.png";
import logoAgile from "../images/agilescrum.png";
import logoBootstrap from "../images/bootstrap.png";
import logoAdobeXd from "../images/adobexd2.png";

import "../style/Home.css";

const Skills = () => {
    return (
        <div className="skills-box">
            <div className="icon-box">
                <img className="icon" src={logoReact} alt="logo ReactJS" />
                <h5>React JS</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoNode} alt="logo NodeJS" />
                <h5>Node JS</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoHtml5} alt="logo HTML 5" />
                <h5>HTML 5</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoCSS3} alt="logo CSS 3" />
                <h5>CSS 3</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoOpquast} alt="logo Opquast" />
                <h5>Opquast</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoGit} alt="logo Git" />
                <h5>Git</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoMysql} alt="logo Mysql" />
                <h5>Mysql</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoAgile} alt="logo Agile Scrum" />
                <h5>Scrum</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoBootstrap} alt="logo Bootstrap" />
                <h5>Bootstrap</h5>
            </div>
            <div className="icon-box">
                <img className="icon" src={logoAdobeXd} alt="logo Adobe Xd" />
                <h5>Adobe Xd</h5>
            </div>
        </div>
    );
};

/*
const Skills = () => {

    const [stacks, setStacks] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/stacks")
            .then((res) => res.data)
            .then((data) => setStacks(data));
    }, []);

    return (
        <div className="skills-box">
            {stacks.map((stack) => (
                <div className="icon-box">
                <img src={stack.icon} alt={stack.name} />
                <h5>{stack.name}</h5>
                </div>
            ))}
        </div>
    );
};
*/

export default Skills;
