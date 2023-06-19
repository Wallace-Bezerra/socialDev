import styled, { keyframes } from "styled-components";

const spinner = keyframes`
 /* 0%{
  transform: rotate(0deg);
 } */
 100%{
  transform: rotate(1turn);
 }
 `;
const show = keyframes`
0%{
  clip-path: circle(0);
  /* width: 0% */
}
100%{
  clip-path: circle(100%);
  width: 100%;
}
`;
export const LoadinContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
  min-height: 100vh;
  background-color: rgba(80, 10, 100, 0.3);
  backdrop-filter: blur(5px);
  animation: ${show} 1s ${(props) => (props.isLoading ? "forwards" : "reverse")};

  /* transition: all 1s ease; */
  .container {
    width: 100px;
    position: relative;
    height: 100px;
    /* border: 10px solid rgba(255, 255, 255, 0.5); */
    border-top: 10px groove #a944e8;
    border-left: 10px groove #a944e8;
    border-right: 10px groove rgba(255, 255, 255, 0.5);
    border-bottom: 10px groove rgba(255, 255, 255, 0.5);
    filter: drop-shadow(0px 4px 50px rgba(131, 46, 183, 1));
    /* border-bottom: 10px solid #832EB7; */
    border-radius: 50%;
    animation: ${spinner} 1.3s linear infinite;
  }
`;
