import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 960px) {
    justify-content: center;
  }
  position: relative;
`;

export const StyledImage = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  object-fit: cover;
  min-height: 100vh;
  background-color: red;
  flex-grow: 1;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const StyledContainer = styled.div`
  width: 610px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.white};
  &:after,
  &:before {
    content: "";
    margin: auto;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;
