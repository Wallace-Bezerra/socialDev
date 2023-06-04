import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: inherit;
  text-decoration:none;
  }

body {
  font-family: 'Roboto', sans-serif;
  background-color: white;
  min-height: 100vh;
  color: #3A3A3A;
  background-color: ${({ theme }) => theme.background}
}
`;
