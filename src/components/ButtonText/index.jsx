import { Container } from "./styles";
import { BiArrowBack } from "react-icons/bi";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      <BiArrowBack />
      {title}
    </Container>
  );
}
