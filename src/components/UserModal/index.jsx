import { Container, Content, FormUser, ContentButton } from "./style";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UserModal = ({ modalUserState, setModalUserState }) => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório: Nome"),
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
      <Modal
        title="Mudar nome do jogador"
        modalState={modalUserState}
        setModalState={setModalUserState}
      >
        <Content>
          <FormUser onSubmit={handleSubmit(singIn)}>
            <Input
              label="Nome"
              placeholder="Ex: Nome de jogador"
              messageErro={errors.name?.message}
              register={register}
              name="name"
            />

            <Input
              label="Senha"
              type="password"
              placeholder="Senha"
              messageErro={errors.password?.message}
              register={register}
              name="password"
            />

            <ContentButton>
              <Button titleButton={"Salvar"} secondary />
            </ContentButton>
          </FormUser>
        </Content>
      </Modal>
    </Container>
  );
};

export default UserModal;
