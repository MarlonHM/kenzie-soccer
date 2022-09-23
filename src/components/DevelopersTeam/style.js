import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;

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

  .developers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    margin-top: 120px;

    @media (max-width: 678px) {
      flex-direction: column;
    }
  }
`;
