import styled from "styled-components";
import { FormContainer } from "../CreatePost/styles";

export const FormEditContainer = styled(FormContainer)`
  padding: 0px;
  color: initial;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  @media (max-width: 600px) {
    gap: 20px;
  }
`;
