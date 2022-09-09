import styled from "styled-components";

export const Container = styled.header`
  min-height: 100vh;
  width: 100%;
  padding: 40px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(165deg, var(--wine-4), var(--wine-3));

  .logo-container {
    text-align: center;
    margin-bottom: 60px;

    img {
      width: 100px;
    }

    @media (max-width: 640px) {
      margin-bottom: 40px;
      img {
        display: none;
      }

      h1 {
        width: 200px;
        word-break: break-word;
      }
    }

    h1 {
      font-family: "Karantina", cursive;
      font-style: normal;
      font-weight: 400;
      font-size: 100px;
      line-height: 0.9;

      background: linear-gradient(
        180deg,
        var(--yellow) 27.93%,
        var(--yellow-3)
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .buttons-container {
    display: flex;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 32px;
    }

    button {
      margin: 0 16px;
      width: 270px;
      height: 70px;
      border-radius: 10px;

      font-family: "Inder";
      font-style: normal;

      font-size: 24px;
      line-height: 30px;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
      border: 0;

      font-weight: 500;
      font-family: "Inder", sans-serif;
    }

    button:first-child {
      color: #78030a;
      background: #e0ccd2;

      &:hover {
        background: #f99db9;
      }
    }

    button:last-child {
      color: #e0ccd2;
      background: var(--wine-5);

      &:hover {
        background: var(--wine-6);
      }
    }
  }
`;
