import React from "react";
import "../style/Button.css";

const PortfolioButton = () => {

    return (
        <div className="button-box">
            <h3>Looking for a selection of my work ?</h3>
            <button to="/" type="button" className="button">View my portfolio</button>
        </div>
    );
};

export default PortfolioButton;
