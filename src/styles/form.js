import styled from "styled-components"

export const FormBox = styled.form`
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 80%;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;

    img{
        height: 67px;
        margin-bottom: 39px;
        margin-top: 20px;
        border-radius: 50%;
        filter: opacity(20%);
    }

    button {
        background: #7D4CDB;
        border: 1px solid #7D4CDB;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
        width: 100%;
        height: 49px;
        font-size: 18px;
        color: #fff;
        font-weight: 700px;
    }

    input {
        background: #EDEDED;
        border: 1px solid #7D4CDB;
        box-sizing: border-box;
        border-radius: 2px;
        height: 49px;
        width: 85%;
        margin-top: 21px;
        margin-bottom: 21px;
    }

    label {
        font-weight: 700;
        font-size: 18px;
        color: #7D4CDB;
        align-self: flex-start;
        margin-left: 26px
    }


    a{
        font-weight: 400;
        font-size: 12px;
        align-self: center;
        margin-bottom: 24px;
        margin-top: 76px;
        color: #3D138D;
    }

    @media (min-width: 768px){
        width: 40%;
    }
`

