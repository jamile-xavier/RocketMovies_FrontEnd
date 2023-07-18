import { Container, Logo, Search, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <strong>RocketMovies</strong>
      </Logo>
      <Search placeholder="Pesquisar pelo título" />
      <Profile>
        <img src="https://github.com/jamile-xavier.png" alt="Foto do usuário" />
        <div>
          <strong>Jamile Xavier</strong>
          <a href="#">sair</a>
        </div>
      </Profile>
    </Container>
  );
}
