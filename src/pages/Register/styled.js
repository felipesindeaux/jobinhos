import styled from "styled-components";
import img from "../../assets/img2.png";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 338px;
  input,
  select {
    background: rgba(196, 196, 196, 0.47);
    width: 300px;
    height: 48px;
    border-radius: 2px;
    border: 1px solid var(--brand);
    margin-bottom: 25px;
    padding: 0px 10px 0px 10px;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    background-color: var(--brand);
    border: 1px solid var(--brand);
    color: white;
    width: 300px;
    height: 44px;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
    margin: auto;
  }

  p {
    margin-bottom: 17px;
    margin-left: 15px;
  }

  @media (min-width: 768px) {
    border: 2px solid var(--light-3);
    margin-top: 90px;
  }
`;

export const RegisterContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .desktop {
    visibility: hidden;
    height: 0px;
    width: 0px;
  }

  p {
    color: var(--brand);
  }

  h2 {
    margin-bottom: 32px;
    color: var(--brand);
    font-size: 36px;
    width: 328px;
    margin-left: 15px;
    h2 {
      color: #3d138d;
      margin-left: unset;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;

    .desktop {
      visibility: unset;
      height: unset;
      width: unset;
      font-size: 72px;
      bottom: unset;
      right: unset;
      width: 90%;
      left: 35px;
      top: 20px;
    }

    .welcome-container {
      height: 590px;
      width: 581px;
      margin-top: 90px;
      background-image: url(${img});
      background-size: 550px;
      background-repeat: no-repeat;
      border: 2px solid var(--light-3);
      border-right: unset;
      position: relative;
    }
    h2 {
      position: absolute;
      bottom: 50px;
      left: 35px;
      font-size: 32px;
      display: flex;
      width: 80%;
      margin-left: 10px;

      h2 {
        position: unset;
        color: unset;
        display: unset;
        width: 100px;
      }
    }
  }
`;

export const RectangleDiv = styled.div`
  width: 328px;
  margin-top: 24px;

  .rectangle-1 {
    background: var(--brand);
    width: 22px;
    height: 2.75px;
    margin-bottom: 5px;
  }

  .rectangle-2 {
    background: var(--brand);
    width: 13.75px;
    height: 2.75px;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    width: 0px;
    visibility: hidden;
  }
`;
