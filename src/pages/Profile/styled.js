import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--brand);
  background: linear-gradient(70deg, #c7c5f4, #8d84d1);

  .card {
    background: var(--light-1);
    border: none;
  }
`;

export const Card = styled.div`
  background: var(--light-1);
  border: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
