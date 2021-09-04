import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Components/Styles/Theme";
import GlobalStyle from "./Components/Styles/GlobalStyle";
// import Header from "./Components/Layout/Header";
// import Section from "./Components/Layout/Section";
// import TodoTemplate from "./Components/Todo/TodoTemplate";
// import TodoHead from "./Components/Todo/TodoHead";
// import TodoCreate from "./Components/Todo/TodoCreate";
// import TodoItem from "./Components/Todo/TodoList";
import Todo from "./Components/Pages/Todo/Todo";

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                {/* <Header />
                <Section>
                    <TodoTemplate>
                        <TodoHead />
                        <TodoItem />
                        <TodoCreate />
                    </TodoTemplate>
                </Section> */}
                <Todo />
                <GlobalStyle />
            </ThemeProvider>
        </div>
    );
};

export default App;
