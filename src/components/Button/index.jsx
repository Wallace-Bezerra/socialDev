import * as S from "./styles";

export const Button = ({ children, error, disabled, variants, onClick }) => {
  return (
    <S.Button
      disabled={disabled}
      onClick={onClick}
      variants={variants}
      error={error}
    >
      {children}
    </S.Button>
  );
};
