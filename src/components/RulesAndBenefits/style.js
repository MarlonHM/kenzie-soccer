import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 0;
  background: rgba(140, 6, 19, 0.817);

  .internal-container {
    padding: 0 32px;
    /* background: black; */
  }

  h2 {
    font-family: "Karantina";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 1;
    text-align: center;
    position: relative;
    z-index: 1;
    margin-bottom: 40px;

    color: #e6c619;

    span {
      display: inline-block;
      background: #8c0614;
      width: 290px;
      margin: auto;
      padding: 10px 0;
    }

    &::before {
      content: "";
      display: block;
      width: 100%;
      background: black;
      border-bottom: 3px solid #e0ccd2;
      position: absolute;
      top: 42px;
      z-index: -1;
    }
  }

  h2:last-of-type {
    margin-top: 40px;
  }

  .internal-container {
    > p {
      text-align: justify;
      margin-bottom: 26px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;

      color: #e0ccd2;
    }

    h3 {
      font-weight: 700;
      color: #fff;
      margin-bottom: 20px;
    }

    ul {
      list-style: disc;
      padding-left: 44px;
      margin-bottom: 26px;
      color: #fffb;
      font-size: 15px;

      @media (max-width: 480px) {
        padding-left: 16px;
      }
    }
  }

  .benefits {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 22px;

      img {
        height: 125px;
      }

      span {
        font-family: "Karantina";
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 36px;
        text-align: center;
        color: #e0ccd2;
        /* margin: 40px auto; */
      }

      p {
        width: 300px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
        color: #e0ccd2;
      }
    }

    @media (max-width: 940px) {
      flex-direction: column;
      gap: 50px;
      div {
        /* background: black; */
        img {
          height: 86px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .internal-container,
    .benefits {
      p {
        font-size: 15px;
        /* background: black; */
      }
    }
    h2 {
      font-size: 48px;

      span {
        width: 225px;
      }

      &::before {
        top: 34px;
      }
    }

    p {
      /* font-size: 10px !important; */
    }
  }
`;
