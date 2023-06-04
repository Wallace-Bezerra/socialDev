import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 70px;
  display: flex;
  gap: 91px;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  h1 {
    font-weight: 500;
    font-size: 80px;
    line-height: 94px;
    margin-bottom: 24px;
  }
  p {
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 41px;

  h2 {
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
  }
  span {
    text-align: center;
    font-size: 22px;
    line-height: 26px;
    font-weight: 400;
    a {
      font-weight: 700;
      color: #8933cd;
    }
  }
`;
export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
