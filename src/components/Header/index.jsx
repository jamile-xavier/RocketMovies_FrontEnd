import { Container, Logo, Search, Profile } from "./styles";

import { Input } from "../../components/Input";

export function Header() {
  return (
    <Container>
      <Logo>
        <strong>RocketMovies</strong>
      </Logo>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
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
