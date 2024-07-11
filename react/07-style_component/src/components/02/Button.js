import React from "react";
import styled from "styled-components";
import srcImg from "../02/nail.png";

const Icon = styled.img`
  border: none;
  width: 16px;
  height: 16px;
`;
const StyleButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;

  & ${Icon} {
    margin-right: 4px;
  }

  &:hover {
    ${Icon} {
      opacity: 0.2;
    }
  }
`;

function Button({ children }) {
  return (
    <StyleButton>
      <Icon src={srcImg} />
      {children}
    </StyleButton>
  );
}

export default Button;
