import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 42px;

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

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  height: 265px;
  width: 173px;
  border: 2px solid var(--dark-6);
  position: relative;
  margin-right: 40px;
  margin-bottom: 40px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;

  h3 {
    color: var(--brand);
    font-size: 14px;
    font-family: "Roboto";
    margin-left: 12px;
  }

  span {
    color: var(--dark-1);
    font-weight: bold;
    font-size: 12px;
  }

  div {
    margin-bottom: 10px;
    margin-left: 12px;
  }

  div :first-child {
    margin-right: 50px;
  }

  p {
    font-size: 10px;
    color: var(--dark-6);
    font-family: "Roboto";
    margin-bottom: 12px;
    margin-left: 12px;
  }

  button {
    width: 170px;
    height: 47px;
    background-color: var(--brand);
    color: white;
    border: unset;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    bottom: 0px;
  }

  img {
    width: 170px;
    height: 91px;
    margin-bottom: 11px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 72px;
  overflow: auto;
  width: 100%;

  @media (min-width: 480px) {
    margin-left: 10%;
    overflow: unset;
    flex-wrap: wrap;
    margin-top: 0px;
    width: 60%;
  }
`;

export const OpacityContainer = styled.div`
  opacity: ${(props) => props.opacity};
`;
