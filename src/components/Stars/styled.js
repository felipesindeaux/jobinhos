import styled from "styled-components";

export const Container = styled.div`
  margin-left: ${(props) => (props.alt ? "px" : "45px")};
  div.stars {
    display: inline-block;
  }

  input.star {
    display: none;
  }

  label.star {
    float: right;
    padding: ${(props) => (props.alt ? "3px" : "10px")};
    font-size: ${(props) => (props.alt ? "15px" : "25px")};
    color: #7d4cdb;
    transition: all 0.2s;
    cursor: ${(props) => (props.alt ? "auto" : "pointer")};
  }

  input.star:checked ~ label.star:before {
    content: "\f005";
    color: #fd4;
    transition: all 0.25s;
  }

  input.star-5:checked ~ label.star:before {
    color: #fd4;
    text-shadow: 0 0 20px ${(props) => (props.alt ? "transparent" : "#7d4cdb")};
  }

  input.star-1:checked ~ label.star:before {
    color: #fd4;
  }

  label.star:hover {
    transform: ${(props) => (props.alt ? "none" : "rotate(-15deg) scale(1.3)")};
  }

  label.star:before {
    content: "\f006";
    font-family: FontAwesome;
  }
`;
