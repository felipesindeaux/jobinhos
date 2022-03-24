import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 170px;
  background: var(--light-1);
  display: flex;
  align-items: center;
  padding: 20px 0px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (min-width: 1000px) {
    background: var(--light-1);
    color: var(--dark-1);
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
    height: 100px;
  }

  @media (min-width: 1368px) {
    padding-left: 60px;
  }
`;

export const MobileLeftContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  div {
    padding: 0;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileTitle = styled.h1`
  color: #7d4cdb;
  padding-left: 22px;

  span {
    color: #fb9df0;
  }
`;

export const DesktopTitle = styled.h1`
  display: none;
  @media (min-width: 1000px) {
    cursor: pointer;
    font-size: 43px;
    display: block;

    span {
      color: var(--brand);
    }
  }
`;

export const DesktopButtonsContainer = styled.div`
  display: none;
  @media (min-width: 1000px) {
    position: unset;
    top: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    top: 35px;
    right: 0px;
    justify-content: flex-end;
    padding-right: 20px;

    button + button {
      margin-left: 30px;
    }

    svg {
      color: var(--dark-1);
      margin-top: -5px;
    }
  }

  @media (min-width: 1368px) {
    padding-right: 60px;
  }
`;

export const DesktopButton = styled.button`
  position: sticky;
  top: 0;

  width: fit-content;
  padding: 0px 30px 0px 11px;
  height: 36px;
  background: transparent;
  border: none;

  font-weight: 700;
  font-size: 18px;
  color: var(--dark-1);

  :hover {
    color: var(--dark-3);
  }
`;
