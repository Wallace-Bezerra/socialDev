import { ErrorTextArea, InputTextArea } from "../CreatePost/styles";
import { ButtonsContainer, FormEditContainer } from "./styles";
import { Button } from "../Button";
import { createPostSchema } from "../../../modules/Post/postSchema";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { api } from "../../../utils/api";
import { useSWRConfig } from "swr";

export const EditPost = ({ setEditPost, content, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: joiResolver(createPostSchema),
  });
  const { mutate } = useSWRConfig();
  const errorTypes = {
    "string.empty": "Esse campo é obrigatório.",
  };

  const onSubimit = async (data) => {
    console.log(data);
    updatePost(id, data);
  };

  const updatePost = async (id, body) => {
    await api.patch(`/api/post/${id}`, body);
    setEditPost(false);
    mutate("/api/post");
  };
  return (
    <FormEditContainer
      onSubmit={handleSubmit(onSubimit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <InputTextArea
        {...register("text")}
        placeholder="Digite sua mensagem"
        rows="4"
        defaultValue={content}
      >
        {/* {content} */}
      </InputTextArea>
      {errors.text && (
        <ErrorTextArea>{errorTypes[errors.text.type]}</ErrorTextArea>
      )}
      <ButtonsContainer>
        <Button
          variants="secondary"
          onClick={() => {
            setEditPost(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          disabled={Object.entries(errors).length > 0}
          variants={"primary"}
          error={errors}
        >
          Editar
        </Button>
      </ButtonsContainer>
    </FormEditContainer>
  );
};
