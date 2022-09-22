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
import api from "../../service";
import jwt_decode from "jwt-decode";

const UserModal = ({ modalUserState, setModalUserState }) => {
  const [user, setUser] = useState([]);
  const history = useHistory();
  const { token } = useContext(UserContext);

  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

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

  const edit = (data) => {
    console.log(data)
  };

  api
    .get(`/users/${idUser}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => console.log(err));

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
