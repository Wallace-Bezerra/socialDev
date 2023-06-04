import { StyledContainer, StyledFlex, StyledImage } from "./styles";

export const ImageWithSpace = ({ children }) => {
  return (
    <StyledFlex>
      <StyledImage image="/coffee-background.jpg" />
      <StyledContainer>{children}</StyledContainer>
    </StyledFlex>
  );
};
