import { Card } from "../Card";
import { Container, PostContainer } from "./styles";
export const Posts = () => {
  return (
    <Container>
      <h2 className="lastPosts">Últimas postagens:</h2>
      <span>Carregar novas postagens</span>
      <PostContainer>
        <Card />
        <Card />
      </PostContainer>
    </Container>
  );
};
