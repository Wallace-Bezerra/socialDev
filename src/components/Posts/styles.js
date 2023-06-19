import styled from "styled-components";

export const Container = styled.div`
  .lastPosts {
    margin-bottom: 42px;
  }
`;
export const NewPosts = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  display: block;
  width: max-content;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
