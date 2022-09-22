import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin-top: 100px;

  h3 {
    font-size: 40px;
    font-weight: 400;
    color: var(--dark-grey);

    span {
      margin-left: 10px;
    }
  }

  @media (min-width: 769px) {
    margin-left: 150px;
  }
`;

export const ContentGroupData = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  button {
    width: 120px;
    padding-left: 20px;
  }

  span {
    font-size: 25px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const Top = styled.div`
  height: 15px;
  width: 100%;
  max-width: 100vw;
  background-color: var(--wine);

  @media (max-width: 768px) {
    margin-top: 140px;
  }
`;

export const ContentPage = styled.div`
  height: 80vh;

  @media (max-width: 768px) {
    margin-left: 150px;
  }
`;

export const TableDiv = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  width: 600px;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    border: 1px solid black;
    height: 40px;
    background-color: var(--wine);
    color: var(--light-pink);
  }
  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    border: 1px solid black;
  }

  @media (max-width: 655px) {
    width: 375px;
    grid-template-columns: 100px 100px 100px 100px;
  }
`;

export const GroupDescription = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  height: 80vh;

  @media (max-width: 1355px) {
    flex-direction: column;
  }
`;

export const DescriptionUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  height: 280px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding-left: 40px;

  h3 {
    font-size: 36px;
  }

  strong {
    color: var(--wine);
  }

  section,
  p,
  span {
    font-size: 18px;
  }

  p {
    font-weight: 700;
  }
`;
