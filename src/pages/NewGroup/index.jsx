import { Container, Content, FormUser, ContentButton } from "./style";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const NewGroup = () => {
  const [modalState, setModalState] = useState(false);
  const history = useHistory();
  const { login } = useContext(UserContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório: Nome do grupo"),
    password: yup
      .string()

      .required("Campo obrigatório: Senha")
      .min(6, "Senha mínima: 6 carateres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const singIn = (data) => {
    login(data);
    return history.push("/dashboard");
  };

  return (
    <Container>
      <button onClick={() => setModalState(true)}>Abrir Modal de testes</button>
      {modalState && (
        <Modal
          title="Eai, bora criar um grupo?"
          modalState={modalState}
          setModalState={setModalState}
        >
          <Content>
            <FormUser onSubmit={handleSubmit(singIn)}>
              <Input
                label="Nome do Grupo"
                placeholder="Ex: Nome do Grupo"
                messageErro={errors.name?.message}
                register={register}
                name="name"
              />
              <input
                label="Grupo privado?"
                type="checkbox"
                name="Grupo privado?"
              />
              if(input.checked)
              {
                <Input
                  label="Senha do grupo"
                  type="password"
                  placeholder="Senha para o Grupo"
                  messageErro={errors.password?.message}
                  register={register}
                  name="password"
                />
              }
              <ContentButton>
                <Button titleButton={"Criar grupo"} primary />
              </ContentButton>
            </FormUser>
          </Content>
        </Modal>
      )}
    </Container>
  );
};

export default NewGroup;
