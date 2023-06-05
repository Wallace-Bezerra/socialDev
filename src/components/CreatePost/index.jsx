import { Button } from "../Button";
import * as S from "./styles";

export const CreatePost = () => {
  return (
    <S.FormContainer>
      <h2>No que você está pensando, @josefortes?</h2>
      <S.InputTextArea
        placeholder="Digite sua mensagem"
        rows="4"
      ></S.InputTextArea>
      <S.WrapperButton>
        <p>A sua mensagem será pública</p>
        <Button>Enviar</Button>
      </S.WrapperButton>
    </S.FormContainer>
  );
};
