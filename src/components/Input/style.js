import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Alumni Sans", sans-serif;
  font-size: 1.6em;
  width: 90%;
  color: var(--dark-grey);

  @media (min-width: 360px) and (max-width: 650px) {
    font-size: 1.2em;
  }
`;

export const LabelInput = styled.label`
  color: ${props => (props.erro ? "red" : "var(--dark-grey)")};
`;

export const InputArea = styled.input`
  border-color: ${props => (props.erro ? "red" : "var(--dark-grey)")};
  border-radius: 5px;
  padding-left: 5px;
  @media (min-width: 360px) and (max-width: 650px) {
    height: 2rem;
  }
`;

export const MessageErro = styled.span`
  font-size: 0.8em;
  color: red;
  @media (min-width: 360px) and (max-width: 650px) {
    font-size: 0.6em;
  }
`;
