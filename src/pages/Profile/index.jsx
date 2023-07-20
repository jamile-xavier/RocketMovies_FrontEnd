import { Container, Form, Avatar } from "./styles";

import { LinkBack } from "../../components/LinkBack";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <LinkBack href="#" title="Voltar" />
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/jamile-xavier.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
