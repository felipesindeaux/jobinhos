import styled from "styled-components";

export const HeaderDiv = styled.header`
  background-color: var(--brand);
  color: white;
  height: 160px;

  h1 {
    margin-left: 25px;
  }
  div {
    display: flex;
    position: relative;
    div {
      display: block;
    }
    button {
      position: absolute;
      right: 25px;
      background-color: var(--brand);
      border: unset;
      color: white;
      margin-top: 25px;
      display: flex;
    }
  }

  @media (min-width: 480px) {
    border-bottom-left-radius: 100px;
    height: 100px;
    position: relative;

    h1 {
      margin-top: 25px;
      margin-left: 55px;
    }

    div {
      button {
        right: 0px;
        top: 100px;
        margin-top: unset;
        width: 130px;
        background-color: white;
        color: #8b8b8b;
        border: 2px solid var(--brand);
        border-bottom-left-radius: 15px;
        text-align: center;
      }
    }
  }
`;

export const Rectangle1 = styled.div`
  width: 22px;
  height: 2.75px;
  background-color: #c4c4c4;
  margin-left: 25px;
  margin-bottom: 5px;
  margin-top: 25px;

  @media (min-width: 480px) {
    width: unset;
    height: unset;
    background-color: unset;
    margin-left: unset;
    margin-bottom: unset;
    margin-top: unset;
  }
`;

export const Rectangle2 = styled.div`
  width: 13px;
  height: 2.75px;
  background-color: #c4c4c4;
  margin-left: 25px;
  margin-bottom: 50px;

  @media (min-width: 480px) {
    width: unset;
    height: unset;
    background-color: unset;
    margin-left: unset;
    margin-bottom: unset;
    margin-top: unset;
  }
`;

export const Arrow = styled.div`
  background: url("http:unsplash.it/400x300");
  background-size: cover;
  background-repeat: no-repeat;
  height: 20px;
  width: 50px;
  margin-top: -2px;
  margin-right: -15px;

  i {
    position: absolute;
    top: -20px;
    right: 0px;
    height: 60px;
    width: 0px;
    transform: rotate(0deg);
  }

  i:before {
    content: "";
    width: 25px;
    height: 2px;
    background: white;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    right: 24px;
    transition: all 0.3s ease;
  }

  i:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0px 5px 5px;
    border-color: transparent transparent transparent white;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    right: 45px;
    transition: all 0.3s ease;
    transform: rotate(180deg);
  }

  @media (min-width: 480px) {
    visibility: hidden;
  }
`;
