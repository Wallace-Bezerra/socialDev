import Link from "next/link";
import { Button } from "../Button/styles";
import { Input } from "../Input";
import * as S from "./styles";

export const Signup = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <h1># Social Dev</h1>
        <p>
          Conecte-se com a comunidade que impulsiona o mundo da programação!
        </p>
      </S.TextContainer>
      <S.FormContainer>
        <h2>Crie sua conta!</h2>
        <S.WrapperInputs>
          <Input label={"Nome"} type={"text"} placeholder={"Digite seu nome"} />
          <Input
            label={"Sobrenome"}
            type={"text"}
            placeholder={"Digite seu sobrenome"}
          />
          <Input
            label={"Usuário"}
            type={"text"}
            placeholder={"Como você quer ser conhecido?"}
          />
          <Input
            label={"E-mail"}
            type={"email"}
            placeholder={"Digite seu e-mail"}
          />
          <Input label={"Senha"} type={"password"} placeholder={"∗∗∗∗∗∗∗"} />
        </S.WrapperInputs>
        <Button>Criar conta</Button>
        <span>
          Já possui conta? <Link href="/Login">Faça seu login </Link>
        </span>
      </S.FormContainer>
    </S.Container>
  );
};
