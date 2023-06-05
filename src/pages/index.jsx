import { CreatePost } from "../components/CreatePost";
import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";
import { Posts } from "../components/Posts";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <CreatePost />
        <Posts />
      </Container>
    </>
  );
};
export default Home;
