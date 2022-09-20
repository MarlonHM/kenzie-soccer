import styled from "styled-components";

export const Global = styled.div`
  width: ${({ Extends }) => (Extends ? "10vw" : "5vw")};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.2s ease-in-out;

  @media (max-width: 1100px) {
    width: ${({ Extends }) => (Extends ? "15vw" : "5vw")};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
    display: flex;
    margin-top: 40px;
    transition: 0.5s;
  }
`;

export const Container = styled.div`
  width: ${({ Extends }) => (Extends ? "10vw" : "5vw")};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.2s ease-in-out;

  @media (max-width: 1100px) {
    width: ${({ Extends }) => (Extends ? "15vw" : "5vw")};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
    display: flex;
    margin-top: 40px;
    transition: 0.5s;
  }

  background: var(--dark-grey);
  border: 1px solid var(--dark-grey);
`;

export const Content = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  height: 90%;
  list-style-type: none;
  padding: 2%;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    margin: 2% 0%;
    height: 10%;
    width: 100%;
    margin-bottom: 30px;

    svg {
      font-size: 2rem;
      color: var(--yellow);
    }

    h2 {
      text-align: center;
      width: 100%;
      color: var(--light-grey);

      @media (max-width: 600px) {
        font-size: 1rem;
      }

      @media (min-width: 600px) {
        font-size: 1rem;
      }

      @media (max-width: 480px) {
        font-size: 1rem !important;
      }
    }

    :hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      height: 100%;
      margin-bottom: 0;
    }
  }
  li svg:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-flow: row nowrap;
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  white-space: nowrap;

  h3 {
    font-size: 2rem;
    color: var(--yellow-2);
    font-weight: 400;

    ::first-letter {
      font-weight: 700;
    }

    span {
      display: inline-block;
      color: var(--color-primary-3);
      font-weight: 200;

      ::first-letter {
        font-weight: 700;
      }
    }

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 50%;
    padding-left: 15px;
  }
`;

export const MobileContent = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 45px;

  svg {
    width: 50px;
    font-size: 32px;
    color: var(--wine);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    height: 50px;
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1f1e1e;

    svg {
      padding-right: 20px;
      height: 40px;
      z-index: 500;
      position: fixed;
      right: 0;
      color: var(--white);
      width: 50px;
    }
  }
`;
