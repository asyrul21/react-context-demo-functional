import React, { useContext } from "react";
import ThemeContext from "./AppContext";
import ThemedButton from "./ThemedButton";

/*
    2 ways to consume Context:
        1. Use the useContext hook
        2. Use the <MyContext.Consumer> wrapper. See Button

    Refernces:
        1. https://reactjs.org/docs/context.html
        2. https://reactjs.org/docs/hooks-reference.html#usecontext
        3. https://stackoverflow.com/questions/59885931/how-to-change-context-value-in-functional-component
*/

const Toolbar = () => {
    const theme = useContext(ThemeContext);
    console.log(`Toolbar theme: ${theme.theme}`);
    return (
        <div
            style={{
                width: "400px",
                height: "400px",
                border: "1px solid black",
                background: theme.theme === "red" ? "#de7373" : "#bfbbbb",
            }}
        >
            <h2>This is the toolbar</h2>
            <ThemedButton />
        </div>
    );
};

export default Toolbar;
