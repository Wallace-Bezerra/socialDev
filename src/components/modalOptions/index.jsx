import { useFetchPosts } from "../../hooks/useFetchPosts";
import { ModalContainer } from "./styles";
import { forwardRef } from "react";
export const ModalOptions = forwardRef(
  ({ id, setEditPost, setIsOpenModal }, ref) => {
    const { handleDeletePost } = useFetchPosts();

    return (
      <ModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        ref={ref}
      >
        <p
          className="edit"
          onClick={() => {
            setIsOpenModal(false);
            setEditPost(true);
          }}
        >
          Editar
        </p>
        <p
          className="delete"
          onClick={() => {
            handleDeletePost(id);
          }}
        >
          Deletar
        </p>
      </ModalContainer>
    );
  }
);
