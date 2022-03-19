import styled from "styled-components";
import img from "../../assets/img2.png";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 300px;
  padding: 10px 0px;
  margin-top: 40px;

  p{
    align-self: flex-start;
  }

  input,
  select {
    background: rgba(196, 196, 196, 0.47);
    width: 280px;
    height: 48px;
    border-radius: 2px;
    border: 1px solid var(--brand);
    margin-bottom: 15px;
    padding: 0px 10px 0px 10px;
  }

  button {
    background-color: var(--brand);
    border: 1px solid var(--brand);
    color: var(--light-1);
    font-weight: 700;
    font-size: 20px;
    width: 280px;
    height: 44px;
    border-radius: 2px;
  }

  p {
    margin-bottom: 17px;
    margin-left: 15px;
  }

  @media (min-width: 1000px) {
    border: 2px solid var(--light-3);
    margin-top: 50px;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .desktop {
    display: none;
  }

  .welcome-container{
    display: none;
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

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;

    .desktop {
      display: block;
      font-size: 72px;
      bottom: unset;
      right: unset;
      width: 90%;
      left: 35px;
      top: 20px;
    }

    .welcome-container {
      display: block;
      height: 560px;
      width: 581px;
      margin-top: 50px;
      border: 2px solid var(--light-3);
      position: relative;
    }

    img{
      filter: blur(2px);
      height: 560px;
      width: 581px;
    }

    h2 {
      position: absolute;
      top: 50px;
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
        margin-left: 10px;
      }
    }
  }
`;