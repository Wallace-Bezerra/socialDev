import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 45px;
  background-color: ${({ theme }) => theme.white};
  height: 80px;
  width: 100%;
  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000;
  }
  a {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;
