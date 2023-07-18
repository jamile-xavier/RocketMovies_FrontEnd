import { Container } from "./styles";
import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";

export function Star() {
  return (
    <Container>
      <BiSolidStar />
      <BiSolidStar />
      <BiSolidStar />
      <BiSolidStar />
      <BiStar />
    </Container>
  );
}
