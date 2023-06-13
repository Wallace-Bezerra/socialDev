import Link from "next/link";
import { Button } from "../Button/styles";
import { Input } from "../Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { signupSchema } from "../../../modules/user/userSchema";

export const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: joiResolver(signupSchema) });
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <S.Container>
      <S.TextContainer>
        <h1># Social Dev</h1>
        <p>
          Conecte-se com a comunidade que impulsiona o mundo da programação!
        </p>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta!</h2>
        <S.WrapperInputs>
          <Input
            register={register}
            name="firstName"
            label={"Nome"}
            type={"text"}
            required
            placeholder={"Digite seu nome"}
            error={errors.firstName}
          />
          <Input
            register={register}
            name="lastName"
            label={"Sobrenome"}
            type={"text"}
            placeholder={"Digite seu sobrenome"}
            error={errors.lastName}
          />
          <Input
            register={register}
            name="user"
            label={"Usuário"}
            type={"text"}
            placeholder={"Como você quer ser conhecido?"}
            error={errors.user}
          />
          <Input
            register={register}
            name="email"
            label={"E-mail"}
            type={"email"}
            placeholder={"Digite seu e-mail"}
            error={errors.email}
          />
          <Input
            register={register}
            name="password"
            label={"Senha"}
            type={"password"}
            placeholder={"∗∗∗∗∗∗∗"}
            error={errors.password}
          />
        </S.WrapperInputs>
        <Button disabled={Object.entries(errors).length > 0} error={errors}>
          Criar conta
        </Button>
        <S.AccountAcces>
          Já possui conta? <Link href="/Login">Faça seu login </Link>
        </S.AccountAcces>
      </S.FormContainer>
    </S.Container>
  );
};
