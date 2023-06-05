import Link from "next/link";
import * as S from "./styles";

export const NavBar = () => {
  return (
    <S.Header>
      <p># Social Dev</p>
      <Link href={"/"}>Desconectar</Link>
    </S.Header>
  );
};
