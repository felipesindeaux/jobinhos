import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 20px;
    color: var(--dark-1);
  }
`;

export const NoServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 400px;
  margin-top: 30px;

  button {
    width: 200px;
    height: 70px;
    background: var(--brand);
    border-radius: 6px;
    border: none;
    color: var(--light-1);
    font-size: 22px;
    font-weight: 600;

    :hover {
      background: var(--accent-1);
      color: var(--dark-1);
      box-shadow: 0px 6px 15px var(--accent-1);
      transition: all.3s;
    }
  }
`;
