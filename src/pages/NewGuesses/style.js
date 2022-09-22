import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-height: 100vh;
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

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;

  h3 {
    margin-bottom: 15px;
    color: var(--dark-grey);
    font-weight: 400;
    font-size: 25px;
  }

  span {
    color: var(--wine);
  }

  @media (min-width: 768px) {
    margin-left: 150px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 290px;
  color: var(--yellow);
`;

export const Time = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Matches = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  max-width: 250px;
  border: 1px solid black;
  border-radius: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

export const GuessButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 20px auto;
  width: 80px;
  height: 30px;
  font-size: 20px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Teams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 15px auto;
  width: 100%;
  max-width: 175px;
  height: 100%;
  max-height: 200px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Flag = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 75px;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
