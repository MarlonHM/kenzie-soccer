import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

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

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Groups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
  height: 100vh;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px black;
  padding: 20px;
  overflow-x: auto;

  @media (min-width: 400px) and (max-width: 500px) {
    max-width: 380px;
  }

  @media (min-width: 500px) and (max-width: 700px) {
    max-width: 480px;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    max-width: 700px;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    max-width: 1000px;
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  @media (min-width: 1440px) {
    max-width: 1250px;
    display: grid;
    grid-template-columns: 3fr 3fr;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 260px;
  border-radius: 5px;
  padding: 15px;
  align-items: center;
  margin: 10px auto;
`;

export const DivMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 200px;

  @media (min-width: 500px) {
    max-width: 400px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 290px;
`;
