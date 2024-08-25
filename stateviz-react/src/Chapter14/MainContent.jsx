import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";


function MainContent() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}
        >
            <p>메인컨텐츠 context </p>
            <button onClick={toggleTheme}>테마 변경</button>


        </div>
    );
}

export default MainContent;