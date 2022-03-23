import styled from "styled-components";

export const Container = styled.div`
  button {
    text-decoration: none;
    color: var(--brand);
    opacity: 5;
    font-family: "work sans", sans serif;
    font-size: 1.5em;
    font-weight: 500;
    transition: 200ms;
    border: none;
    background: none;
  }

  button:hover {
    opacity: 0.3;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .content {
    border: 1px solid #36383f;
    border-radius: 20px;
    width: 94%;
    height: 91%;
    background-color: var(--brand);
    overflow: hidden;
  }
  nav {
    background-color: var(--light-1);
    height: 65px;
  }

  #menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25px;
    left: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #menuToggle span {
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: var(--brand);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 75vw;
    height: 400px;
    box-shadow: 0 0 10px #85888c;
    margin: -50px 0 0 -50px;
    padding: 33px;
    padding-top: 125px;
    background-color: #f5f6fa;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    transition-delay: 2s;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }
`;
