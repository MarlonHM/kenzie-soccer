import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 0;

  h2 {
    font-family: "Karantina";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 65px;

    text-align: center;

    color: #b50c27;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;

    text-align: justify;
    margin: 52px 0;

    color: #000000;
  }

  .meme-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    /* background-color: orangered; */

    div {
      display: flex;
      flex: 0 1 32%;
      /* border: 1px solid; */
      height: 300px;

      img {
        width: 80%;
        /* border: 1px solid; */
      }
    }

    div:nth-child(2n + 1) {
      /* background: red; */
      align-items: flex-start;
      justify-content: flex-start;
    }

    div:nth-child(2n) {
      /* background: red; */
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
`;
