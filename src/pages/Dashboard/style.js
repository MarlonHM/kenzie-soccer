import styled from "styled-components";

export const Top = styled.div`
  height: 15px;
  width: 100%;
  max-width: 100vw;
  background-color: var(--wine);
`;

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;

  h2 {
    margin: 0 auto;
    text-align: center;
  }

  h3 {
    margin-bottom: 15px;
    color: #e6c619;
    font-weight: 400;
    font-size: 25px;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 425px;
  margin: 0 auto;

  input {
    width: 272px;
    border-radius: 5px;
    height: 28px;
    margin-top: 16px;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    max-width: 600px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  Button {
    padding: 5px;
  }
`;

export const Groups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px black;

  @media (min-width: 400px) and (max-width: 500px) {
    max-width: 380px;
  }

  @media (min-width: 500px) and (max-width: 700px) {
    max-width: 480px;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;
