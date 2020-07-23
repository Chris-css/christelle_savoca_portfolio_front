import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Home.css";

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

export default Skills;
