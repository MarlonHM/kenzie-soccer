import styled from "styled-components";

export const BackGroundDiv = styled.div`
  background-color: var(--wine);
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDiv = styled.div`
  background-color: var(--white);
  border: 1em solid var(--yellow);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  width: 50%;

  H3 {
    font-size: 4vw;
    margin: 50px;
    color: var(--wine);
  }

  @media (min-width: 360px) and (max-width: 650px) {
    width: 70%;
    padding: 20px;
    border: 0.5em solid var(--yellow);
    border-radius: 0.5em;
    top: 20%;

    h3 {
      font-size: 7.2vw;
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
