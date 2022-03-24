import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 700px;
  margin: 50px auto;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-weight: 300;

  h4 {
    font-size: 24px;
    font-weight: 600;
    color: #000;
    opacity: 0.85;
  }
  label {
    font-size: 12.5px;
    color: #000;
    opacity: 0.8;
    font-weight: 400;
  }
  a {
    color: rgba(#000, 0.4);
    font-size: 14px;
    border-bottom: solid 1px rgba(#000, 0);
    padding-bottom: 4px;
    font-weight: 300;
    transition: all 0.3s ease;
    margin-top: 40px;
    &:hover {
      border-bottom: solid 1px rgba(#000, 0.2);
    }
  }
  button {
    -webkit-appearance: none;
    width: auto;
    min-width: 100px;
    border-radius: 24px;
    text-align: center;
    padding: 15px 40px;
    margin-top: 5px;
    background-color: var(--brand);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
    border: none;
    transition: all 0.3s ease;
    outline: 0;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 2px 6px -1px rgba($primary, 0.65);
      &:active {
        transform: scale(0.99);
      }
    }

    &:disabled {
      background-color: var(--light-6);
      cursor: not-allowed;
      transform: none;
    }
  }
  input {
    font-size: 16px;
    padding: 20px 0px;
    height: 56px;
    border: none;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    background: #fff;
    width: 280px;
    box-sizing: border-box;
    transition: all 0.3s linear;
    color: #000;
    font-weight: 400;
    -webkit-appearance: none;
    &:focus {
      border-bottom: solid 1px $primary;
      outline: 0;
      box-shadow: 0 2px 6px -8px rgba($primary, 0.45);
    }
  }

  select {
    font-size: 16px;
    padding: 20px 0px;
    height: 56px;
    border: none;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    background: #fff;
    width: 280px;
    box-sizing: border-box;
    transition: all 0.3s linear;
    color: #000;
    font-weight: 400;
    &:focus {
      border-bottom: solid 1px $primary;
      outline: 0;
      box-shadow: 0 2px 6px -8px rgba($primary, 0.45);
    }
  }

  @media (min-width: 600px) {
    width: 500px;
  }

  @media (min-width: 1000px) {
    width: 780px;
    margin-top: 70px;
  }

  $displacement: 3px;
  @keyframes shake-shake {
    0% {
      transform: translateX(-$displacement);
    }
    20% {
      transform: translateX($displacement);
    }
    40% {
      transform: translateX(-$displacement);
    }
    60% {
      transform: translateX($displacement);
    }
    80% {
      transform: translateX(-$displacement);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const Left = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-end;
    width: 220px;
    height: auto;
    min-height: 100%;
    position: relative;
    background-image: url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    svg {
      fill: white;
      height: 40px;
      width: auto;
      margin: 20px;
    }
  }

  @media (min-width: 1000px) {
    width: 340px;
  }
`;

export const Form = styled.form`
  padding: 40px 30px;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  h4 {
    font-size: 22px;
    margin-bottom: 20px;
    color: rgba(#000, 0.5);
    span {
      color: rgba(#000, 1);
      font-weight: 700;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 5px;
    font-size: 14px;
    color: #000;
    opacity: 0.65;
    font-weight: 400;
    max-width: 200px;
    margin-bottom: 40px;
  }

  @media (min-width: 1000px) {
    width: 450px;
  }
`;

export const FloatingLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  label {
    position: absolute;
    top: calc(50% - 7px);
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;
    padding-left: 44px;
  }
  input {
    width: calc(100% - 44px);
    display: flex;
  }
  select {
    width: calc(100% - 44px);
    display: flex;
  }
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 44px;
    display: flex;
    svg {
      height: 30px;
      width: 30px;
      margin: auto;
      opacity: 0.15;
      transition: all 0.3s ease;
      path {
        transition: all 0.3s ease;
      }
    }
  }
  input:not(:placeholder-shown) {
    padding: 28px 0px 12px 0px;
  }
  input:not(:placeholder-shown) + label {
    transform: translateY(-10px);
    opacity: 0.7;
  }
  input:valid:not(:placeholder-shown) + label {
    svg {
      opacity: 1;
      path {
        fill: $primary;
      }
    }
  }
  input:not(:valid):not(:focus) + label {
    animation-name: shake-shake;
    animation-duration: 0.3s;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--brand);
  background: linear-gradient(70deg, #c7c5f4, #8d84d1);
`;
