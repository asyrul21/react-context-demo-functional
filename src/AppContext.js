import React from "react";

const ThemeContext = React.createContext({
    theme: "gray",
    toggleTheme: () => {},
});

export default ThemeContext;
