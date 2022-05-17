import React, { useState } from "react";
import "./App.css";
import ThemeContext from "./AppContext";
import Toolbar from "./Toolbar";

function App() {
    const [theme, setAppTheme] = useState("gray");
    const handleThemeToggle = () => {
        theme === "red" ? setAppTheme("gray") : setAppTheme("red");
    };
    return (
        <div className="App">
            <h1>React Context Demo</h1>
            <ThemeContext.Provider
                // tie the context state to component state
                // and the context state update method to component state update method
                value={{ theme, toggleTheme: handleThemeToggle }}
            >
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
