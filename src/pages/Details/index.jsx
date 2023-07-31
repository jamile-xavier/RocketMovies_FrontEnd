import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Star } from "../../components/Star";
import { Tag } from "../../components/Tag";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { AiOutlineClockCircle } from "react-icons/ai";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchMovie();
  }, []);
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <div className="ranking">
              <h1>{data.title}</h1>
              <Star />
            </div>

            <div className="created__by">
              <img
                src="https://github.com/jamile-xavier.png"
                alt="Foto do usuário"
              />
              <p>Por Jamile Xavier</p>

              <AiOutlineClockCircle />
              <p>23/05/22 ás 08:00</p>
            </div>

            {data.tags && (
              <div className="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
