import * as S from "./styles";

export const LoadingFull = ({ isLoading }) => {
  return (
    <S.LoadinContainer isLoading={isLoading}>
      <div className="container"></div>
    </S.LoadinContainer>
  );
};
