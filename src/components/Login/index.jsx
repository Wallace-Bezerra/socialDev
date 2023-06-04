import Link from "next/link";
import { Button } from "../Button/styles";
import { Input } from "../Input";
import * as S from "./styles";

export const Login = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <h1># Social Dev</h1>
        <p>
          Conecte-se com a comunidade que impulsiona o mundo da programação!
        </p>
      </S.TextContainer>
      <S.FormContainer>
        <h2>Entre em sua conta</h2>
        <S.WrapperInputs>
          <Input
            label={"E-mail ou usuário"}
            type={"email"}
            placeholder={"Email ou usuário"}
          />
          <Input label={"Senha"} type={"password"} placeholder={"∗∗∗∗∗∗∗"} />
          <Button>Entrar</Button>
          <span>
            Não possui uma conta? <Link href="/Signup">Faça seu cadastro</Link>
          </span>
        </S.WrapperInputs>
      </S.FormContainer>
    </S.Container>
  );
};
