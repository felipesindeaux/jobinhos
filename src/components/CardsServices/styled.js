import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 270px;
  border: 1px solid var(--dark-6);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 239px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .title {
    display: flex;
    margin: 18px 15px;
    p {
      font-size: 18px;
      margin-right: auto;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 1000px) {
    margin: 20px;
    width: 300px;
    display: inline;
  }
`;

export const ButtonContainer = styled.div`
  margin: 18px 15px;
  button {
    background-color: var(--brand);
    color: var(--light-1);
    width: 100%;
    height: 80px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 7px;
    text-align: center;
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
  overflow-x: auto;
  margin: 20px 15px;
  font-size: 18px;
  font-weight: 700;
  height: 80px;

  @media screen and (min-width: 1000px) {
    overflow-x: hidden;
    height: 190px;
  }
`;

export const AlternativeButtonContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

export const AlternativeButton = styled.button`
  background-color: var(--brand);
  color: var(--light-1);
  width: 40%;
  height: 50px;
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 4px;
  text-align: center;
  border: none;
`;
