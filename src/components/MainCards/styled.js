import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display:flex;
  overflow-x:auto;
    

  @media screen and (min-width: 1000px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: auto;
  }
`;
