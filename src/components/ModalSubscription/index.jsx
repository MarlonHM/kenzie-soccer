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

const ModalSubscription = ({ modalState, setModalState }) => {
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
        title="Coloque a senha para poder entrar"
        modalState={modalState}
        setModalState={setModalState}
      >
        <Content>
          <FormUser onSubmit={handleSubmit(singIn)}>
            <Input
              label="Senha"
              type="password"
              placeholder="Senha do grupo privado"
              messageErro={errors.password?.message}
              register={register}
              name="password"
            />

            <ContentButton>
              <Button titleButton={"Entrar"} primary />
            </ContentButton>
          </FormUser>
        </Content>
      </Modal>
    </Container>
  );
};

export default ModalSubscription;
