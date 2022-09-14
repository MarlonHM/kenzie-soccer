import styled from "styled-components";

export const ButtonColor = styled.button`
  background: ${(props) =>
    (props.primary && (props.primary ? "var(--wine)" : "white")) ||
    (props.secondary && (props.secondary ? "var(--light-pink)" : "white")) ||
    (props.tertiary ? "var(--wine-2)" : "white")};

  color: ${(props) => (props.secondary ? "var(--wine-2)" : "var(--white)")};
  font-size: 1.2em;
  margin: 1vw;
  padding: 1vw 1.5vw;
  border: none;
  border-radius: 0.2em;
  display: flex;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 360px) and (max-width: 650px) {
    border-radius: 0.3em;
    padding: 3vw;
    font-size: 1em;
  }
`;
