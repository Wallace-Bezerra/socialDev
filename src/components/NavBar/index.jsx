import Link from "next/link";
import * as S from "./styles";
import { api } from "../../../utils/api";

export const NavBar = () => {
  const handleLogout = async () => {
    await api.post("/api/user/logout");
  };

  return (
    <S.Header>
      <p># Social Dev</p>
      <Link href={"/Login"} onClick={handleLogout}>
        Desconectar
      </Link>
    </S.Header>
  );
};
