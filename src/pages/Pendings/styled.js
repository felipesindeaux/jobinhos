import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  @media (min-width: 1000px) {
    /* flex-direction: row; */
  }
`;

export const Greetings = styled.div`
  margin: 0px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    color: var(--brand);
    font-size: 36px;
    width: 200px;
    margin-bottom: 12px;
  }

  h3 {
    color: var(--dark-6);
    font-size: 24px;
  }

  @media (min-width: 1000px) {
  }
`;

export const ButtonsContainer = styled.div`
  width: 80%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  margin-bottom: 20px;

  button {
    padding: 10px 15px;
    font-weight: 600;
    font-size: 17px;
    border-radius: 3px;
    position: relative;
    background-color: var(--brand);
    border: none;
    box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.1);
    color: var(--dark-6);
    width: max-content;
    transition: box-shadow 0.5s ease 0s, top 0.5s ease 0s, border 0.5s ease 0s,
      color 0.5s ease 0s;
    top: 0;

    :hover {
      box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.5);
      top: -3px;
      color: var(--light-1);
    }
  }

  .active {
    box-shadow: 0px 6px 15px var(--accent-1);
    border: 1px var(--accent-1) solid;
    top: -3px;
    color: var(--light-1);
  }

  @media (min-width: 360px) {
    flex-direction: row;
  }
`;

export const OpacityContainer = styled.div`
  opacity: ${(props) => props.opacity};
`;

export const CardsContainer = styled.div`
  margin: auto;
  display: flex;
  overflow-x: auto;

  h2 {
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: auto;
  }
`;
