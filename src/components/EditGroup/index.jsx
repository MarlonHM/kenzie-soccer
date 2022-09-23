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
import { GroupContext, useGroupId } from "../../providers/Groups";

const EditGroup = ({ modalEditGroup, setModalEditGroup }) => {
  const history = useHistory();
  const { privateGroup, setPrivateGroup } = useContext(UserContext);
  const {editGroup, deleteGroup} = useContext(GroupContext);
  const { groupData } = useGroupId();

  const schema = yup.object().shape({
    groupName: yup.string().required("Campo obrigatório: Nome do grupo")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const editGroupData = (data) => {
    editGroup(data)
    history.push('/dashboard')
  };

  const deleteGroupData = () => {
    deleteGroup()
    history.push('/dashboard')
  };

  const { groupName } = groupData[0];
  return (
    <Container>
      <Modal
        title="Vai trocar o Marketing?"
        modalState={modalEditGroup}
        setModalState={setModalEditGroup}
      >
        <Content>
          <FormUser onSubmit={handleSubmit(editGroupData)}>
          <Input
                label="Nome do Grupo"
                placeholder="Ex: Nome do Grupo"
                messageErro={errors.name?.message}
                register={register}
                name="groupName"
              />

            <ContentButton>
              <Button
                titleButton={"Excluir grupo"}
                secondary
                type="button"
                onClick={() =>deleteGroupData()}
              />
              <Button
                titleButton={"Salvar alterações"}
                primary
              />
            </ContentButton>
          </FormUser>
        </Content>
      </Modal>
    </Container>
  );
};

export default EditGroup;
