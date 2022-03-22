import styled from "styled-components";

export const Title = styled.h1 `
  padding: 30px 20px ;
  color: var(--brand);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;


    
    div{
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
    
    }

`

export const CarouselFix = styled.div`
    svg{
      stroke:none;
    }

    button:hover{
      background-color: #7D4CDB;
      opacity: 60%;
    }
`


