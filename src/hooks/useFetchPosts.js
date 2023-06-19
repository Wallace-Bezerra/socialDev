import { api } from "../../utils/api";
import { useSWRConfig } from "swr";
export const useFetchPosts = () => {
  const { mutate } = useSWRConfig();
  const handleEditPost = async () => {};

  const handleDeletePost = async (id) => {
    await api.delete(`/api/post/${id}`);
    mutate("/api/post");
  };
  return { handleDeletePost, handleEditPost };
};
