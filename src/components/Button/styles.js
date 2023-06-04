import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  border-radius: 10px;
  padding: 17px 20px;
  cursor: pointer;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.9;
  }
`;
