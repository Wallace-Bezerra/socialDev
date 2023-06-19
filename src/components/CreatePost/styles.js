import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContainer = styled(motion.form)`
  background-color: ${({ theme }) => theme.white};
  padding: 30px 40px;
  border-radius: 10px;
  h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #000000;
    margin-bottom: 27px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000;
  }
  button {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    padding: 14px 55px;
  }
  @media (max-width: 550px) {
    padding-inline: 28px;
  }
`;
export const InputTextArea = styled.textarea`
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 16px 22px;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto";
  line-height: 21px;
  margin-bottom: 15px;
  resize: none;
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #989898;
  }
`;
export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    button {
      align-self: flex-end;
    }
  }
`;
export const ErrorTextArea = styled.span`
  color: red;
  padding-bottom: 20px;
  display: inline-block;
`;
