import { Container, Content, NewFilm } from "./styles";
import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <h2>Meus filmes</h2>
        <NewFilm>
          <FiPlus />
          Adicionar filme
        </NewFilm>
      </Content>
    </Container>
  );
}
