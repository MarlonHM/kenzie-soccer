import styled from "styled-components";

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;

  h3 {
    margin: 10px auto;
    text-align: right;
  }

  .yellow {
    margin-bottom: 15px;
    color: #e6c619;
    font-weight: 400;
    font-size: 64px;
  }

  @media (min-width: 768px) {
    margin-left: 150px;
  }
`;

export const Container = styled.section`
  /* background: #f4f4f4; */
  padding: 120px 0;
  border-bottom: 1px solid;

  h3 {
    font-family: "Karantina";
    font-style: normal;
    font-weight: 400;
    line-height: 65px;
    font-size: 2rem;
    margin-bottom: 60px;

    text-align: center;

    color: #b50c27;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    span {
      color: #630000;
    }
  }

  .about-container {
    display: flex;
    align-items: center;
    /* gap: 100px; */

    .about-image {
      /* background: red; */
      flex: 1 0 400px;
      text-align: center;
      img {
        width: 250px;
        /* border: 1px solid; */
      }
    }

    .about-text {
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;

        text-align: justify;
        margin-bottom: 16px;

        color: #000000;
      }

      a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;

        color: #b50c27;
        margin-top: 14px;
        padding-bottom: 0;
        display: inline-block;
        border-bottom: 2px solid;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    @media (max-width: 860px) {
      .about-image {
        display: none;
      }

      .about-text {
        a {
          width: 180px;
          margin: auto;
          display: block;
          text-align: center;
        }
      }
    }
  }
`;

export const DescriptionUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 300px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding-left: 40px;
  padding-bottom: 10px;

  h3 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    color: var(--dark-grey);
  }

  p,
  span {
    font-size: 18px;
  }
`;

export const TopDetails = styled.div`
  height: 15px;
  width: 100%;
  max-width: 100vw;
  background-color: var(--wine);
  @media (max-width: 768px) {
    margin-top: 140px;
  }
`;
