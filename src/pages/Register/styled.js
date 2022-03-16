import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  input,
  select {
    background: rgba(196, 196, 196, 0.47);
    width: 328px;
    height: 48px;
    border-radius: 2px;
    border: 1px solid #6d466b;
    margin-bottom: 25px;
  }

  button {
    background-color: #6d466b;
    border: 1px solid #6d466b;
    color: white;
    width: 328px;
    height: 44px;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
  }

  p {
    margin-bottom: 17px;
  }
`;

export const RegisterContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #6d466b;
  }

  h2 {
    margin-bottom: 32px;
    color: #6d466b;
    font-size: 36px;
    width: 328px;
    h2 {
      color: #cfb3c0;
    }
  }
`;

export const RectangleDiv = styled.div`
  width: 328px;
  margin-top: 24px;

  .rectangle-1 {
    background: #6d466b;
    width: 22px;
    height: 2.75px;
    margin-bottom: 5px;
  }

  .rectangle-2 {
    background: #6d466b;
    width: 13.75px;
    height: 2.75px;
    margin-bottom: 32px;
  }
`;
