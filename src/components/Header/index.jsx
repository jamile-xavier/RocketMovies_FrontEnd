import { Container, Logo, Search, Profile } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header() {
  const { signOut, user } = useAuth();
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
          <Link to="../../pages/SignIn" onClick={signOut}>
            sair
          </Link>
        </div>
      </Profile>
    </Container>
  );
}
