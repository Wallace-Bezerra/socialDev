import { Error, InputContainer } from "./styles";

const errorsType = {
  "string.empty": "Esse campo é obrigatório.",
  "string.email": "Por favor, insira um email válido.",
  "string.min": "A senha deve conter pelo menos 6 caracteres.",
  "duplicated.email": "Este email já está cadastrado.",
  "duplicated.user": "Este usuário já está cadastrado.",
};
export const Input = ({
  label,
  name,
  type,
  placeholder,
  register,
  required,
  error,
}) => {
  return (
    <InputContainer error={error?.message}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {error && <Error>{errorsType[error.type] || error.message}</Error>}
    </InputContainer>
  );
};
