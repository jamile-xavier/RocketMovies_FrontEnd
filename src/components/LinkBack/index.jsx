import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function LinkBack({ title, href, ...rest }) {
  return (
    <Container>
      <FiArrowLeft />
      <a to={href}>{title}</a>
    </Container>
  );
}
