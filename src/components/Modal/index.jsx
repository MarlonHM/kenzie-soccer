import { Container, Content, Header, Body } from "./style";
import { IoIosClose } from "react-icons/io";

const Modal = ({ children, title, modalState, setModalState, ...rest }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "modal-background") {
      setModalState(false);
    }
  };

  const handleCloseModalBtn = (e) => {
    console.log("clicked");
  };

  return (
    <Container id="modal-background" onClick={(e) => handleCloseModal(e)}>
      <Content>
        <Header onClick={(e) => handleCloseModalBtn}>
          <h2>{title}</h2>
          <IoIosClose onClick={() => setModalState(false)} />
        </Header>
        <Body>{children}</Body>
      </Content>
    </Container>
  );
};

export default Modal;
