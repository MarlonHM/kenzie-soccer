import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const FormSave = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    align-items: left;
  }

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
