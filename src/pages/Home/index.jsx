import { Container, Content, NewFilm } from "./styles";
import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Movie } from "../../components/Movie";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Section title="Meus filmes">
          <NewFilm>
            <FiPlus />
            Adicionar filme
          </NewFilm>

          <Movie
            data={{
              title: "Interestellar",
              text: "Pragas nas colheitas fizeram a civilização humana regredir para um am a civilização humana regredir para um am a civilização humana regredir para um am a civilização humana regredir para um",
              tags: [
                { id: "1", name: "Ficção científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  );
}
