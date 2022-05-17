import React from "react";
import "./Button.css";

// theme can either be red or gray
const Button = ({ theme = "gray", onClick = () => {} }) => {
    console.log(`Button theme: ${theme}`);
    const buttonStyles = {
        background: theme === "red" ? "red" : "gray",
        color: theme === "red" ? "white" : "black",
    };
    return (
        <div
            style={buttonStyles}
            className="button_component"
            onClick={onClick}
        >
            {`The theme is ${theme}`}
        </div>
    );
};

export default Button;
