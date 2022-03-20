import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content:space-around;
    
  }

  .Aceppt {
    color: white;
    width: 100%;
    height: 60px;
    font-weight: 700;
    background-color: var(--dark-3);
    border: none;
    border-radius: 0px;
    :hover {
      background-color: var(--brand);
    }
  }
`;

export const Figures = styled.section`
  img {
    width: 290px;
    height: 200px;
    margin: 10px;
    border-radius: 8px;
  }
`;

export const Name = styled.p`
  color: var(--brand);
  margin: 20px 15px;
  font-size: 24px;
  letter-spacing: 0.08em;
`;

export const Desc = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const Price = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const Comments = styled.div`
  overflow-x: auto;

  .Data {
    border-radius: 16px;
    background-color: #c4c4c436;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    margin: 15px 20px;
  }
`;

export const Commit = styled.p`
  font-size: 15px;
  color: #00000085;
  margin: 8px 11px;
`;

export const Comment = styled.div`
  
  margin: 25px;
`;

export const NameComment = styled.p`
  color: var(--brand);
  font-size: 16px;
  margin: 8px;
  line-height: 14px;
`;

export const noComments = styled.div`
  border-radius: 16px;
    background-color: #c4c4c436;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    margin: 15px 20px;
`