import { Container, Content, FormUser, ContentButton } from "./style";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const UserModal = ({ modalUserState, setModalUserState }) => {
  const history = useHistory();
  const { token, user, editUser } = useContext(UserContext);

  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

  console.log("user", user);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório: Nome"),
    email: yup.string().email('Email inválido').required("Campo obrigatório: Email")

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const edit = (data) => {
    editUser(data);


    toast.success("Usuário alterado com sucesso!");
    setModalUserState(false);
    history.push("/dashboard");

  };

  return (
    <Container>
      <Modal
        title="Mudar nome do jogador"
        modalState={modalUserState}
        setModalState={setModalUserState}
      >
        <Content>
          <FormUser onSubmit={handleSubmit(edit)}>
            <Input
              label="Nome"
              placeholder={user.name}
              messageErro={errors.name?.message}
              register={register}
              name="name"
            />

            <Input
              label="Email"
              type="email"
              value={user.email}
              messageErro={errors.email?.message}
              register={register}
              name="email"
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
