import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
  border: 2px solid var(--dark-6);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 20px auto;
    border: 3px solid var(--brand)
  }

  button{
      margin:auto;
      margin-bottom:10px;
      width:90%;
      height:50px;
  }
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
  font-weight: 700;
  color: var(--brand);

  p {
    font-weight: 700;
    margin-left: 5px;
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
  color: var(--brand);

  p {
    font-weight: 700;
    margin-left: 5px;
    color: var(--dark-1);
    font-size: 15px;
    letter-spacing: 0.08em;
  }
`;
