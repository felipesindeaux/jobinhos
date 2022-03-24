import styled from "styled-components";

export const Container = styled.div`
  margin-left: 45px;
  div {
    display: inline-block;
  }

  input {
    display: none;
  }

  label {
    float: right;
    padding: 10px;
    font-size: 25px;
    color: #7d4cdb;
    transition: all 0.2s;
    cursor: pointer;
  }

  input:checked ~ label:before {
    content: "\f005";
    color: #fd4;
    transition: all 0.25s;
  }

  input-5:checked ~ label:before {
    color: #fe7;
    text-shadow: 0 0 20px #7d4cdb;
  }

  input-1:checked ~ label:before {
    color: #fd4;
  }

  label:hover {
    transform: rotate(-15deg) scale(1.3);
  }

  label:before {
    content: "\f006";
    font-family: FontAwesome;
  }
`;
