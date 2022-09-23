import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 250px;
  h2 {
    color: (--dark-grey);
    font-size: 3rem;
  }
  @media (min-width: 360px) and (max-width: 650px) {
    width: 100%;
    margin: 0;
    margin-top: 4rem;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--dark-grey);
      font-size: 1.5rem;
    }
  }
`;

export const Section = styled.section`
  margin: 50px 150px;
  float: left;
  h2 {
    color: var(--wine);
    font-size: 2rem;
  }
  table {
    margin-top: 1rem;
  }
  @media (min-width: 360px) and (max-width: 650px) {
    float: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5rem 0;
  }
`;

export const TableSection = styled.table`
  text-align: center;
  border-collapse: collapse;
  th {
    background-color: var(--wine);
    color: var(--white);
    border: 1px solid var(--light-grey);
    font-size: 1.5rem;
    padding: 1rem;
  }
  td {
    border: 1px solid var(--dark-grey);
    margin: 0;
    padding: 1rem;
  }
  .jogo {
    padding: 1rem;
    pointer-events: visibleFill;
    font-size: 0.8rem;
  }
  .group {
    padding: 0 3.5rem;
  }
  @media (min-width: 360px) and (max-width: 650px) {
    th {
      padding: 0.1rem 0.5rem;
      font-size: 1rem;
    }
    td {
      font-size: 0.7rem;
      padding: 10px 0;
    }
    .jogo {
      pointer-events: visibleFill;
      font-size: 0.8rem;
    }
    .group {
      padding: 0 30px;
    }
  }
`;

export const Footer = styled.div`
  clear: both;
  position: absolute;
  bottom: 0;
`;
