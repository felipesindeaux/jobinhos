import styled from "styled-components";
import img from '../../assets/img2.png'

export const FormContainer = styled.form`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  input,
  select {
    background: rgba(196, 196, 196, 0.47);
    width: 85%;
    height: 49px;
    border-radius: 2px;
    border: 1px solid #7D4CDB;
    margin-bottom: 25px;
  }

  button {
    background-color: #7D4CDB;
    border: 1px solid #7D4CDB;
    color: white;
    width: 100%;
    height: 44px;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    font-size: 18px;
  }

  p {
    margin-bottom: 17px;
    align-self: flex-start;
    margin-left: 26px;
  }

  @media (min-width: 768px){
        width: 40%;
    }
`;

export const RegisterContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #7D4CDB;  
  }

  h2 {
    margin-bottom: 32px;
    color: #3D138D;
    font-size: 36px;
    width: 328px;
    h2 {
      color: #7D4CDB;
    }
  }
`;

export const RectangleDiv = styled.div`
  width: 328px;
  margin-top: 24px;

  .rectangle-1 {
    background: #7D4CDB;
    width: 22px;
    height: 2.75px;
    margin-bottom: 5px;
  }

  .rectangle-2 {
    background: #7D4CDB;
    width: 13.75px;
    height: 2.75px;
    margin-bottom: 32px;
  }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;


    @media (min-width: 1000px){
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
            background-size: 50%;
            background-color: #EDEDED;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;

            border: 1px solid #7D4CDB;
            border-bottom-left-radius: 18px;
            border-bottom-right-radius: 18px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .textBox{
            border: none;
            box-shadow: none;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

        }
        
        h1{
            font-size: 48px;
            margin-bottom: 120px;
            color: #3D138D;
            text-align: right;            
            backdrop-filter: blur(2px);
        }

    }
`