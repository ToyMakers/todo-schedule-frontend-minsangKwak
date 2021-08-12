import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html,body{
    width:100vw;
    overflow-x:hidden;
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
    background-color: ${({ theme }) => theme.colors.bg_color};
  }
  button{
    border: none;
    outline: none;
  }
  input{
    padding: 1.2rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.input_color};
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
    background-color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.blue};
  }
  ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.white};
  }

`;

export default GlobalStyle;
