import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Tittle = styled.h1 `
text-align: center;
`
export const Card = styled.div `
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 270px;
  border: 1px solid var(--dark-6);
  border-radius: 10px;
  box-shadow:  10px 9px 14px -5px rgb(0 0 0 / 40%);
  margin: 20px 20px;

  img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  div {
    display: flex;
    margin: 18px 15px;
    p {
      font-size: 18px;
      margin-right: auto;
      font-weight: 700;
    }
  }

  button {
    background-color: var(--brand);
    color: var(--light-1);
    width: 100%;
    height: 80px;
    font-size: 24px;
    font-weight: 700;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
    margin:20px 
  }
`;

export const Name = styled.p `
  color: var(--brand);
  margin: 20px 15px;
  font-size: 24px;
  letter-spacing: 0.08em;
`;

export const Desc = styled.p `
  color: var(--dark-3);
  margin: 20px 15px;
  font-size: 18px;
  font-weight: 700;
`;