import * as S from "./styles";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { createPostSchema } from "../../../modules/Post/postSchema";
import { Button } from "../Button";
import { api } from "../../../utils/api";
import { useSWRConfig } from "swr";
import { useState } from "react";
import { LoadingFull } from "../LoadingFull";

export const CreatePost = ({ user }) => {
  const { mutate } = useSWRConfig();

   const errorTypes = {
    "string.empty": "Esse campo é obrigatório.",
  };

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: joiResolver(createPostSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  console.log(isValid);
  console.log(isLoading, "loading");

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(async () => {
      console.log("POsteii");
      const response = await api.post("/api/post", data);
      if (response.status === 201) {
        mutate("/api/post");
      }
      resetField("text");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingFull isLoading={isLoading} />}
      <h2>No que você está pensando, @{user}?</h2>
      <S.InputTextArea
        {...register("text")}
        placeholder="Digite sua mensagem"
        rows="4"
      ></S.InputTextArea>
      {errors.text && (
        <S.ErrorTextArea>{errorTypes[errors.text.type]}</S.ErrorTextArea>
      )}
      <S.WrapperButton>
        <p>A sua mensagem será pública</p>
        <Button
          disabled={Object.entries(errors).length > 0}
          variants={"primary"}
          error={errors}
        >
          Enviar
        </Button>
      </S.WrapperButton>
    </S.FormContainer>
  );
};
