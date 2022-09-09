import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  height: 94px;
  border-top: 26px solid #b6273a;

  span {
    display: flex;
    align-items: center;
    gap: 12px;

    font-family: "Inder";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: #e0ccd2;
  }

  @media (max-width: 680px) {
    border-top-width: 8px;

    span {
      img {
        width: 20px;
      }
      font-size: 14px;
    }
  }
`;
