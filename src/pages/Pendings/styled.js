import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 42px;

  h2 {
    color: var(--brand);
    font-size: 36px;
    width: 200px;
    margin-bottom: 12px;
  }

  h3 {
    color: var(--dark-6);
    font-size: 24px;
  }

  @media (min-width: 1000px){
    flex-direction: row;
  }
`;

export const Greetings  = styled.div`
  padding-left: 22px;
  margin-bottom: 10px;

  @media (min-width: 1000px){
    padding-left: 100px;
  }
`

export const OpacityContainer = styled.div`
  opacity: ${(props) => props.opacity};
`;
