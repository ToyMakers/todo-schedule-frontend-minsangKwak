import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Layout/Header";
import Section from "./Components/Layout/Section";
import TodoCreate from "./Components/Todo/TodoCreate";
import TodoHead from "./Components/Todo/TodoHead";
import TodoItem from "./Components/Todo/TodoList";
import TodoTemplate from "./Components/Todo/TodoTemplate";

const GlobalStyle = createGlobalStyle`

  :root{
    /* default */
    --default-color:#ffffff;
    --default-color-light:#f8f9fa;
    --default-color-dark:#e9ecef;
    --default-font-color:#495057;
    --default-button-color:#ced4da;
    --primary-color:#506ad4;
    --primary-color-light:#6d80ce;
    --warning-color:#ff6b6b;
    --warning-color-light:#ff8787;
    
    /* custom */
    --custom-font-color-gray-light:#868e96;
    --custom-font-color-gray-dark:#343a40;

    --custom-main-bg-color:#ebecf0;
    --custom-input-border-color:#dee2e6;

    --custom-scrollbar-bg-color:#f5f5f5;
    --custom-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.04);
  }
  html,body{
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;

  }
  html{
    font-size:62.5%;
  }
  body {
    font-family: 'Montserrat','Roboto','Noto Sans KR', sans-serif;
    margin:0;
    padding:0;
    background-color: var(--custom-main-bg-color);
  }
  button{    
    border: none;
    outline: none;
  }
  input{
    padding: 1.2rem;
    border-radius: 4px;
    border: 1px solid var(--custom-input-border-color);
    width: 100%;
    outline: none;
    font-size: 1.8rem;
    box-sizing: border-box;
  }

  @media all and (max-width: 530px) {
    html,body{
      display:block;
      align-items:stretch;
      justify-content: stretch;
    }
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    height:0.6rem;
    background-color: var(--custom-scrollbar-bg-color);
  }

  ::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
  }
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
      background-color: var(--custom-scrollbar-bg-color);
  }

`;

const App = () => {
    return (
        <>
            <Header />
            <Section className="min-width">
                <TodoTemplate>
                    <TodoHead />
                    <TodoItem />
                    <TodoCreate />
                </TodoTemplate>
            </Section>
            <GlobalStyle />
        </>
    );
};

export default App;
