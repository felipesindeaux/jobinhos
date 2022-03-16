import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{
        --brand: #7D4CDB;
        --accent-1: #6FFFB0;
        --accent-2: #FD6FFF;
        --accent-3: #81FCED;
        --accent-4: #FFCA58;
        --neutral-1: #00873D;
        --neutral-2: #3D138D;
        --neutral-3: #00739D;
        --neutral-4: #A2423D;
        --status-error: #FF4040;
        --status-ok: #00C781;
        --light-1: #F8F8F8;
        --light-3: #EDEDED;
        --light-6: #DADADA;
        --dark-1: #333333;
        --dark-3: #777777;
        --dark-6: #999999;
        --toastify-icon-color-error: #FF4040;
        --toastify-color-progress-error: #FF4040;
        --toastify-icon-color-success: #00C781;
        --toastify-color-progress-success: #00C781;
        /* --toastify-text-color-light: #F8F9FA;
        --toastify-color-light: #343B41; */
        --toastify-font-family: 'Roboto';
    }
    body{
        font-family: 'Roboto', sans-serif;
    }
    button{
        cursor: pointer;
    }
`;
