import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  flex-shrink:0;
  width: 270px;
  border: 1px solid var(--dark-6);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 20px;

  img {
    width: 100%;
    height: 239px;
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

export const Name = styled.p`
  color: var(--brand);
  margin: 20px 15px;
  font-size: 24px;
  letter-spacing: 0.08em;
`;

export const Desc = styled.p`
  color: var(--dark-3);
  margin: 20px 15px;
  font-size: 18px;
  font-weight: 700;
`;
