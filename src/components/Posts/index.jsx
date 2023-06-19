import { Card } from "../Card";
import { Container, NewPosts, PostContainer } from "./styles";
// import { api } from "../../../utils/api";
// import { useEffect, useState } from "react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

import useSWR from "swr";
export const Posts = ({ user }) => {
  const { data: posts, error, isLoading } = useSWR("/api/post", fetcher);

  // const [posts, setPosts] = useState([]);
  // const getPostFetch = async () => {
  //   const response = await api.get("/api/post");
  //   setPosts(response.data);
  // };
  // useEffect(() => {
  //   getPostFetch();
  // }, []);

  return (
    <Container>
      <h2 className="lastPosts">Últimas postagens:</h2>
      <NewPosts>Carregar novas postagens</NewPosts>
      <PostContainer>
        {isLoading && <div>CARREGANDO.....</div>}
        {posts?.map((post) => {
          return (
            <Card
              name={post.createdBy.user}
              content={post.text}
              date={post.createdDate}
              key={post._id}
              id={post._id}
              isOwner={user.id === post.createdBy._id}
            />
          );
        })}
      </PostContainer>
    </Container>
  );
};
