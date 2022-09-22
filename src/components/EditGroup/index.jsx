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
import { useGroupId } from "../../providers/Groups";

const EditGroup = ({ modalEditGroup, setModalEditGroup }) => {
  const history = useHistory();
  const { login } = useContext(UserContext);
  const { groupData } = useGroupId();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório: Nome do grupo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { groupName } = groupData[0];
  return (
    <Container>
      <Modal
        title="Vai trocar o Marketing?"
        modalState={modalEditGroup}
        setModalState={setModalEditGroup}
      >
        <Content>
          <FormUser>
            <Input
              label="Nome do Grupo"
              placeholder={groupName}
              messageErro={errors.name?.message}
              register={register}
              name="name"
            />

            <ContentButton>
              <Button
                titleButton={"Excluir grupo"}
                secondary
                onClick={handleSubmit()}
              />
              <Button
                titleButton={"Salvar alterações"}
                primary
                onClick={handleSubmit()}
              />
            </ContentButton>
          </FormUser>
        </Content>
      </Modal>
    </Container>
  );
};

export default EditGroup;
