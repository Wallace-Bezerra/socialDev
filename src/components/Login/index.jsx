import Link from "next/link";
import * as S from "./styles";
import { Button } from "../Button/index";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../../modules/user/userSchema";
import { joiResolver } from "@hookform/resolvers/joi";
import { useRouter } from "next/router";
import { api } from "../../../utils/api";

export const Login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({ resolver: joiResolver(loginSchema) });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/api/user/login", data);
      if (response.status === 200) {
        router.push("/");
      }
    } catch ({ response }) {
      const { error } = response.data;
      if (error === "User not found") {
        setError("userOrEmail", {
          message: "Usuário ou E-mail não encontrado.",
        });
      }
      if (error === "incorrect password") {
        setError("password", {
          message: "Senha incorreta.",
        });
      }
    }
  };
  console.log(errors);
  return (
    <S.Container>
      <S.TextContainer>
        <h1># Social Dev</h1>
        <p>
          Conecte-se com a comunidade que impulsiona o mundo da programação!
        </p>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Entre em sua conta</h2>
        <S.WrapperInputs>
          <Input
            label={"E-mail ou usuário"}
            type={"text"}
            placeholder={"Email ou usuário"}
            register={register}
            name="userOrEmail"
            error={errors.userOrEmail}
          />
          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"∗∗∗∗∗∗∗"}
            register={register}
            name="password"
            error={errors.password}
          />
          <Button
            disabled={Object.entries(errors).length > 0}
            variants="primary"
            error={errors}
          >
            Entrar
          </Button>
          <S.AccountAcces>
            Não possui uma conta? <Link href="/Signup">Faça seu cadastro</Link>
          </S.AccountAcces>
        </S.WrapperInputs>
      </S.FormContainer>
    </S.Container>
  );
};
