import styled, { keyframes } from "styled-components";
import { css } from "styled-components";
const showButton = keyframes`
  100%{
    background-color: gray 
  }
`;
const showButtonOn = keyframes`
  100%{
    background: gray 
  }
`;

export const Button = styled.button`
  background: ${({ theme, variants }) =>
    variants === "primary" ? theme.primary : theme.white};
  color: ${({ theme, variants }) =>
    variants === "primary" ? theme.white : theme.primary};
  border: ${({ theme, variants }) =>
    variants === "primary" ? "none" : `2px solid ${theme.primary} `};
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  border-radius: 10px;
  padding: 17px 20px;
  cursor: pointer;
  animation: ${showButtonOn} 0.3s reverse;
  ${({ error }) =>
    error &&
    css`
      :disabled {
        animation: ${showButton} 0.3s forwards;
        cursor: not-allowed;
      }
    `}
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.9;
    ${({ variants, theme }) =>
      variants !== "primary"
        ? css`
            background-color: #f1f1f1;
          `
        : ""}
  }
`;
