import { CreatePost } from "../components/CreatePost";
import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";
import { Posts } from "../components/Posts";
import { withIronSessionSsr } from "iron-session/next";
import { ironConfig } from "../../lib/middleware/ironSession";

const Home = ({ user }) => {
  return (
    <>
      <NavBar />
      <Container>
        <CreatePost user={user.user} />
        <Posts user={user} />
      </Container>
    </>
  );
};

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    console.log(user);
    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: "/Login",
        },
      };
    }
    return {
      props: { user },
    };
  },
  ironConfig
);
export default Home;
