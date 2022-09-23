import styled from "styled-components";

export const Container = styled.div`
  background: rgba(56, 51, 51, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;

  z-index: 100;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto 16px;

  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 15px;
  overflow: hidden;

  background: #f5f5f5;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 4px 14px 14px;
  min-height: 70px;

  background: #d9d9d9;

  h2 {
    font-family: "Karantina";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 1;

    color: #000000;

    @media (max-width: 480px) {
      font-size: 32px !important;
    }
  }

  svg {
    cursor: pointer;
    font-size: 60px;

    @media (max-width: 480px) {
      font-size: 45px;
    }
  }
`;

export const Body = styled.div`
  padding: 16px;
`;
