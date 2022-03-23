import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  background-color: #fff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 500px;
  border-radius: 6px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  @media screen and (min-width: 1000px) {
  }
`;

export const SpanDiv = styled.div`
  display: flex;
  overflow-x: auto;
  padding-left: 20px;

  span {
    max-width: 90%;
    background: #cccccc;
    border-radius: 50px;
    font-size: 12px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    background-color: var(--brand);
  }

  span + span {
    margin-left: 5px;
  }
`;

export const Title = styled.p`
  max-width: 90%;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--dark-1);
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
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
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  h5 {
    margin: 0;
  }
`;

export const Price = styled.p`
  padding-left: 20px;
  color: var(--brand);
  font-size: 16px;
  font-weight: 600;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 3rem;  
  text-decoration: none;  
  color: var(--black-1);
  width: 40px;
  height: 40px;   
  transition: .5s linear;
  position: relative;
  z-index: 1;

  :hover{
    color: white;
  }

  ::before{
    content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 50%;
  z-index: -1;
  transform: scale(0);
  transition: 0.3s cubic-bezier(.95, .32, .37, 1.21);
  }

  :hover::before{
    transform: scale(1);
    background: var(--brand);
  }

  svg{
    color: var(--black-1);
    width: ${({alt}) => alt ? '20px' : 'unset'};
    height: ${({alt}) => alt ? '20px' : 'unset'};
  }
`;

export const Name = styled.p``;

export const Desc = styled.p`
  font-size: 13px;
  padding-left: 20px;
  max-width: 90%;

  @media screen and (min-width: 1000px) {
  }
`;

export const AlternativeButtonContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

export const AlternativeButton = styled.button`
  background-color: var(--brand);
  color: var(--light-1);
  width: 40%;
  height: 50px;
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 4px;
  text-align: center;
  border: none;
`;
