import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Components/Styles/Theme";
import GlobalStyle from "./Components/Styles/GlobalStyle";
import Todo from "./Components/Pages/Todo/Todo";

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Todo />
                <GlobalStyle />
            </ThemeProvider>
        </div>
    );
};

export default App;
