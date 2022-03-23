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
    justify-content: space-around;
  }

  .Aceppt {
    color: white;
    width: 100%;
    height: 60px;
    font-weight: 700;
    background-color: var(--brand);
    border: none;
    border-radius: 0px;
    :hover {
      background-color: var(--dark-1);
      border:none;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 700px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 200px;

  @media screen and (min-width: 1000px) {
    flex-direction: column;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;

  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  div{
    display:flex;
    flex-direction: row;
    align-items: center;
  }
  h5 {
    margin: 0;
  }
`;

export const Title = styled.p`
  text-align:center;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--dark-1);
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
  margin: 20px 10px;
  font-size: 18px;
  letter-spacing: 0.08em;
`;

export const Desc = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const Price = styled.p`
  color: black;
  font-size: 14px;
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
`;

export const SpanDiv = styled.div`
  display: flex;
  overflow-x: auto;
  padding-left: 20px;

  span {
    display:none;
    background: #cccccc;
    border-radius: 50px;
    font-size: 12px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--brand);
  }

  span + span {
    margin-left: 5px;
  }

  @media screen and (min-width: 1000px) {

    span{
      display:flex;
    }
  }
`;