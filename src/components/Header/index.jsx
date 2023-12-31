import { Container, Logo, Search, Profile, Logout } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  return (
    <Container>
      <Logo>
        <strong>RocketMovies</strong>
      </Logo>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>sair</Logout>
        </div>
      </Profile>
    </Container>
  );
}
