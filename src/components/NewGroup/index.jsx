import { Container, Content, FormUser, ContentButton } from "./style";
import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import Input from "../Input";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGroupId } from "../../providers/Groups";

const NewGroup = () => {
  const { modalState, setModalState } = useGroupId();
  const history = useHistory();
  const { login } = useContext(UserContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório: Nome do grupo"),
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

            <ContentButton>
              <Button
                titleButton={"Criar grupo"}
                primary
                onClick={handleSubmit(singIn)}
              />
            </ContentButton>
          </FormUser>
        </Content>
      </Modal>
    </Container>
  );
};

export default NewGroup;
