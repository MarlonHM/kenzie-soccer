import styled from "styled-components";

export const BackGroundDiv = styled.div`
  background-color: var(--yellow);
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDiv = styled.div`
  background-color: var(--white);
  border: 1em solid var(--wine);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50%;
  width: 50%;

  H3 {
    font-size: 4vw;
    margin: 50px;
  }

  @media (min-width: 360px) and (max-width: 650px) {
    width: 70%;
    padding: 20px;
    border: 0.5em solid var(--wine);
    border-radius: 0.5em;
    top: -50%;

    h3 {
      font-size: 8vw;
      margin: 20px;
    }
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    margin: 10px 0;
    width: 70%;
    height: 3em;
  }

  @media (min-width: 360px) and (max-width: 650px) {
    input {
      margin: 10px 0;
      width: 90%;
      height: 2em;
    }
  }
`;
