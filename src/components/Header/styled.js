import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 170px;
  background: var(--brand);
  color: var(--light-1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 10px;

  button {
    background: transparent;
    border: none;
    color: var(--light-1);
    font-weight: 700;
    font-size: 16px;

    :hover {
      color: var(--light-6);
    }
  }

  @media (min-width: 1000px) {
    justify-content: flex-start;
    align-items: center;
    padding: 0px 100px;
    height: 180px;
    border-radius: 0px 0px 0px 120px;
  }
`;

export const MobileLeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    :hover {
      cursor: pointer;
      color: var(--light-6);
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileRightButton = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  height: 24px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const DesktopTitle = styled.h1`
  display: none;

  @media (min-width: 1000px) {
    font-size: 72px;
    display: block;
  }
`;

export const DesktopButtonsContainer = styled.div`
    display: none;

    @media (min-width: 1000px) {
    display: flex;
    justify-content: flex-end;

    button + button{
        margin-left: 20px;
    }
  }
`

export const DesktopButton = styled.button`
    width: 230px;
    height: 36px;
    background: transparent;
    border: 3px solid var(--brand);
    border-top: none;
    border-radius: 0px 0px 0px 25px;

    font-weight: 700;
    font-size: 24px;
    color: var(--dark-3);
`