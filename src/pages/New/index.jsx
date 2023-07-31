import { Header } from "../../components/Header";

import { Container, Form, Inputs, Buttons } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Markers } from "../../components/Markers";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag() {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do filme");
    }

    async function handleRemoveMovie() {
      const confirm = window.confirm("Deseja realmente remover a nota?");
      if (confirm) {
        await api.delete(`/notes/${params.id}`);
        navigate(-1);
      }
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (newLink) {
      return alert(
        "Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });
    alert("Nota criada com sucesso");
    navigate("/");
  }

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
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </Inputs>
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Marcadores" className="Mark">
            <div className="tags">
              {tags.map((tag, index) => (
                <Markers
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <Markers
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Buttons>
            <Button title="Excluir filme" onClick={handleRemoveMovie} />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </Buttons>
        </Form>
      </main>
    </Container>
  );
}
