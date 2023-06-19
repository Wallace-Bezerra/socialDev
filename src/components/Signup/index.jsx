import Link from "next/link";
import { Button } from "../Button/index";
import { Input } from "../Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { signupSchema } from "../../../modules/user/userSchema";
import { useRouter } from "next/router";
import { api } from "../../../utils/api";

export const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({ resolver: joiResolver(signupSchema) });
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { status } = await api.post("/api/user/signup", data);
      if (status === 201) {
        router.push("/");
      }
    } catch (error) {
      const { code, duplicateKey } = error.response.data;
      if (code == 11000) {
        setError(duplicateKey, {
          type: `duplicated.${duplicateKey}`,
        });
      }
    }
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
        <Button
          disabled={Object.entries(errors).length > 0}
          variants="primary"
          error={errors}
        >
          Criar conta
        </Button>
        <S.AccountAcces>
          Já possui conta? <Link href="/Login">Faça seu login </Link>
        </S.AccountAcces>
      </S.FormContainer>
    </S.Container>
  );
};
