import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 calc((100% - 64px) / 3);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 6px 10px 2px rgba(0, 0, 0, 0.25);
  background: linear-gradient(145deg, #e6c719bb, #ab1020c6);

  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 20px; */
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 940px) {
    flex: 0 0 calc((100% - 100px) / 2);
  }

  @media (max-width: 678px) {
    /* flex: 0 1 400px; */
    width: 280px;
    margin: auto;
  }

  img.avatar {
    width: 80%;
    max-width: 180px;
    border-radius: 50%;
    border: 8px solid #e6c619;
    margin-bottom: 20px;
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
  }

  h4 {
    font-family: "Karantina";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 1;
    text-align: center;
    margin-bottom: 0;
    /* background-color: red; */

    color: #000000;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    margin: 8px auto 20px;
    /* background: red; */
  }

  .social-medias img {
    width: 28px;
    margin: 0 12px;
  }
`;
