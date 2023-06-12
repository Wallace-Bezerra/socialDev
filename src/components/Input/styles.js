import styled from "styled-components";
import { css } from "styled-components";
export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  input {
    background: #f5f5f5;
    border: 1px solid #e6e6e6;
    ${({ error }) =>
      error &&
      css`
        border: 1px solid red;
        :focus-within {
          outline: none;
        }
      `};
    border-radius: 10px;
    padding: 16px 22px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    ::placeholder {
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #989898;
    }
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
`;
