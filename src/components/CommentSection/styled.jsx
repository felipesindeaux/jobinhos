import styled from "styled-components";

export const CommentSectionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: auto;
  left: -50%;
  right: -50%;
  top: 30%;
  width: 300px;
  height: 350px;
  background-color: var(--light-1);
  border: 2px solid var(--dark-6);

  img {
    width: 300px;
    height: 150px;
    margin-bottom: 15px;
    align-self: center;
  }
  textarea {
    width: 90%;
    height: 58px;
    background-color: var(--light-3);
    border: unset;
    padding: 10px 10px 10px 10px;
    resize: none;
    margin-bottom: 15px;
    overflow: hidden;
    align-self: center;
  }

  h3 {
    font-size: 14px;
    color: var(--brand);
    margin-left: 15px;
  }

  span {
    color: var(--dark-1);
    font-size: 12px;
    margin-left: 10px;
  }

  button {
    width: 20px;
    border: unset;
    position: absolute;
    right: 0px;
    background-color: var(--light-3);
  }

  div {
    display: flex;
    margin-bottom: 15px;
    button {
      width: 90%;
      align-self: center;
      height: 38px;
      border: unset;
      background-color: var(--dark-6);
      cursor: pointer;
      border-radius: 0px 0px 15px 15px;
      position: unset;
      color: var(--light-1);
    }
    div {
      display: block;
      position: relative;
      background-color: var(--light-3);
      width: 90%;
      align-self: center;

      img {
        width: 10px;
        height: 10px;
        position: absolute;
        right: 10px;
        top: 5px;
      }
    }
  }

  .text {
    flex-direction: column;
  }
`;
