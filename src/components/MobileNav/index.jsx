import React from "react";
import { Container } from "./styled";

const NavBar = ({ options }) => {
  return (
    <Container>
      <nav>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            {options.map((item, index) => (
              <li key={index}>
                <button onClick={item.onClick}>{item.label}</button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
