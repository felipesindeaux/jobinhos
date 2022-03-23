import styled from "styled-components";

export const CommentSectionContainer = styled.textarea`
  border-radius: 16px;
  background-color: #c4c4c436;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 200px;
  margin: 10px;
  border: 2px solid var(--brand);
  padding: 20px;

  @media screen and (min-width: 1000px) {
    width: 500px;
    margin: 20px 50px;
  }
`;

export const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  h2 {
    display: flex;
    margin: 20px 10px;
    font-size: 18px;
    align-items: center;
    svg {
      margin-right: 10px;
      
    }

    button {
      width: 10%;
      padding-left: 10px;
    }
    width: 100%;
  }

  button {
    width: 95%;
    margin: auto;
  }

  @media screen and (min-width: 1000px) {
    margin: 10px;

    h2 {
      margin: 20px 50px;

      button {
        width: 10%;
        padding-left: 20px;
        margin-left: 32%;
        height:40px;
      }
    }

    button{
      width:50%;
      height:50px;
    }
  }
`;
