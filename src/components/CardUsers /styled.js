import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: var(--light-1);
  border: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 20px auto;
  }

  button {
    margin: auto;
    margin-bottom: 10px;
    width: 90%;
    height: 50px;
    border-radius: 6px;
  }
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
  font-weight: 700;
  color: var(--dark-1);

  p {
    font-weight: 700;
    margin-left: 15px;
    color: var(--dark-1);
    font-size: 16px;
    letter-spacing: 0.08em;
  }
`;

export const DivEmail = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
  font-weight: 700;
  color: var(--dark-1);

  p {
    font-weight: 700;
    margin-left: 15px;
    color: var(--dark-1);
    font-size: 15px;
    letter-spacing: 0.08em;
  }
`;
