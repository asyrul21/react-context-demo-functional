import ThemeContext from "./AppContext";
import Button from "./Button";

const ThemedButton = () => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
            console.log(`Themed Button theme: ${theme}`);
            return <Button theme={theme} onClick={toggleTheme} />;
        }}
    </ThemeContext.Consumer>
);

export default ThemedButton;
