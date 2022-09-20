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

const EditGroup = () => {
  const [modalState, setModalState] = useState(false);
  const [privateGroup, setPrivateGroup] = useState(false);
  const history = useHistory();
  const { login } = useContext(UserContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório: Nome do grupo"),
    privateGroup: yup.boolean().required(privateGroup),
    password: yup.string().min(6, "Senha mínima: 6 carateres"),
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
          title="Vai trocar o Marketing?"
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
              <Input
                type="checkbox"
                register={register}
                name="privateGroup"
                label="Grupo privado?"
                onchange={() => setPrivateGroup(!privateGroup)}
              />
              {privateGroup && (
                <Input
                  label="Senha do grupo"
                  type="password"
                  placeholder="Senha para o Grupo"
                  messageErro={errors.password?.message}
                  register={register}
                  name="password"
                />
              )}
              <ContentButton>
                <Button
                  titleButton={"Excluir grupo"}
                  secondary
                  onClick={handleSubmit(singIn)}
                />
                <Button
                  titleButton={"Salvar alterações"}
                  primary
                  onClick={handleSubmit(singIn)}
                />
              </ContentButton>
            </FormUser>
          </Content>
        </Modal>
      )}
    </Container>
  );
};

export default EditGroup;
