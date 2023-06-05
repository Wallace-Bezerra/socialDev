import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 24px 34px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Heading = styled.div`
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 6px;
    color: #000000;
  }
  time {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
`;
export const Content = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
