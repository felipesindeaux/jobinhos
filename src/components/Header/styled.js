import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 170px;
  background: ${({whiteTheme}) => whiteTheme ? "white" : "#7D4CDB"};
  color: var(--light-1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 10px;

  @media (min-width: 1000px) {
    background: var(--brand);
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
    padding: 0;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileRightButton = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  svg{
    width: 23px;
    height: 23px;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileTitle = styled.h1`
  color: ${({whiteTheme}) => whiteTheme ? "#7D4CDB" : "#F8F8F8"};

  span{
    color: var(--accent-2);
  }
`

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