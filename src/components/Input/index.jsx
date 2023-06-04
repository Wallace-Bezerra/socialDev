import { InputContainer } from "./styles";

export const Input = ({ label, type, placeholder }) => {
  return (
    <InputContainer>
      {label}
      <input type={type} placeholder={placeholder} />
    </InputContainer>
  );
};
