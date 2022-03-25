import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  overflow-x: auto;
  max-width: 100%;
  padding: 30px;

  @media screen and (min-width: 1075px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: auto;
    overflow-x: hidden;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: var(--brand);
  background: linear-gradient(70deg, #c7c5f4, #8d84d1);
`;

export const Card = styled.div`
  margin: 15px 0px 15px 15px;
  flex-shrink: 0;
  padding: 30px 0 40px;
  background-color: var(--light-1);
  text-align: center;
  overflow: hidden;
  position: relative;
  padding: 30px;
  height: 320px;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  :hover {
    img::before {
      height: 100%;
    }

    img {
      box-shadow: 0 0 0 14px var(--light-1);
      transform: scale(0.7);
    }

    ul {
      bottom: 0;
    }
  }
`;

export const Img = styled.div`
  display: inline-block;
  width: 130px;
  height: 100px;
  margin-bottom: 50px;
  z-index: 0;
  position: relative;

  img {
    width: 130px;
    height: 100px;
    border-radius: 50%;
    /* border: 2px solid var(--brand); */
    transform: scale(1);
    transition: all 0.9s ease 0s;
  }

  ::before {
    content: "";
    width: 100%;
    height: 100px;
    border-radius: 50%;
    background-color: var(--brand);
    position: absolute;
    bottom: 135%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3);
    transition: all 0.3s linear 0s;
  }

  ::after {
    content: "";
    width: 100%;
    height: 100px;
    border-radius: 50%;
    background-color: var(--brand);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Info = styled.div`
  h4 {
    display: block;
    font-size: 15px;
    color: #4e5052;
    text-transform: capitalize;
  }
`;

export const List = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--brand);
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 10px;
    font-size: 17px;
    color: white;
    transition: all 0.3s ease 0s;
    text-decoration: none;

    :hover {
      color: var(--brand);
      background-color: var(--light-1);
      border-radius: 50%;
    }
  }
`;
