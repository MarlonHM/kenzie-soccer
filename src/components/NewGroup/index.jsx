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
import { GroupContext, useGroupId } from "../../providers/Groups";
import jwt_decode from "jwt-decode";

const NewGroup = () => {
  const [privateGroup, setPrivateGroup] = useState(false);
  const { modalState, setModalState } = useGroupId();
  const {token} = useContext(UserContext)
  const {creatGroup} = useContext(GroupContext);
  const history = useHistory();

  const infoUser = token && jwt_decode(token);
  const user = infoUser && infoUser.sub;
  const ranking = [Number(user)]

  const schema = yup.object().shape({
    groupName: yup.string().required("Campo obrigatório: Nome do grupo"),
    privateGroup: yup.boolean(),
    passwordGroup: yup.string().min(6, "Senha mínima: 6 carateres").required().default('senhaforte'),
    userId: yup.number().default(Number(user)),
    totalUsers: yup.number().default(ranking.length),
    ranking: yup.array().required().default(ranking),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const newGroup = (data) => {
    creatGroup(data);
    setModalState(false);
  };

  return (
    <Container>
      <Modal
        title="Eai, bora criar um grupo?"
        modalState={modalState}
        setModalState={setModalState}
      >
        <Content>
          <FormUser onSubmit={handleSubmit(newGroup)}>
          <Input
                label="Nome do Grupo"
                placeholder="Ex: Nome do Grupo"
                messageErro={errors.name?.message}
                register={register}
                name="groupName"
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
                  name="passwordGroup"
                />
              )}

            <ContentButton>
              <Button
                titleButton={"Criar grupo"}
                primary
                onClick={handleSubmit(newGroup)}
              />
            </ContentButton>
          </FormUser>
        </Content>
      </Modal>
    </Container>
  );
};

export default NewGroup;
