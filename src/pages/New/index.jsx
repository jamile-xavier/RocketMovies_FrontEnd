import { Header } from "../../components/Header";

import { Container, Form, Inputs, Buttons } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Markers } from "../../components/Markers";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Link to="/">
            <FiArrowLeft /> Voltar
          </Link>
          <header>
            <h1>Novo Filme</h1>
          </header>
          <Inputs>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </Inputs>
          <Textarea placeholder="Observações" />
          <Section title="Marcadores" className="Mark">
            <div className="tags">
              <Markers value="react" />
              <Markers value="" isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <Buttons>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </Buttons>
        </Form>
      </main>
    </Container>
  );
}
