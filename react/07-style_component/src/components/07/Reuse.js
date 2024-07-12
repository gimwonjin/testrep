import React from "react";
import styled, { css } from "styled-components";

const SIZE = {
  large: 24,
  medium: 20,
  smail: 16,
};

const fontSize = css`
  font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px;
`;

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  /* font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px; */
  ${fontSize}
`;

const INPUTS = styled.input`
  outline: none;
  border: 2px solid #eeeeee;
  padding: 16px;
  /* font-size: ${({ size }) => SIZE[size] ?? SIZE["mediue"]}px; */
  ${fontSize}
`;
const Container = styled.div`
  ${Button}, ${INPUTS} {
    margin: 10px;
  }
`;

function Reuse(props) {
  return (
    <Container>
      <h2>Button</h2>
      <Button size="small">smail</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h2>Input</h2>
      <INPUTS size="small" />
      <INPUTS size="medium" />
      <INPUTS size="large" />
    </Container>
  );
}

export default Reuse;
