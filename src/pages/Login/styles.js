import styled from "styled-components";
import img from "../../assets/19197947.jpg";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;

  h1 {
    display: none;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;

    div {
      width: 70%;
      height: 100%;

      background-image: url(${img});
      background-size: 58%;
      background-color: #ededed;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;

      border: 1px solid #7d4cdb;
      border-bottom-left-radius: 18px;
      border-bottom-right-radius: 18px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .textBox {
      border: none;
      box-shadow: none;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      display: block;
      font-size: 48px;
      margin-bottom: 120px;
      color: #3d138d;
      text-align: right;
      backdrop-filter: blur(2px);
    }
  }
`;
