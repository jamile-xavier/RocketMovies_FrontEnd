import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/jamile-xavier.png" alt="Foto do usuário" />
        <div>
          <strong>Jamile Xavier</strong>
          <span>sair</span>
        </div>
      </Profile>
    </Container>
  );
}
