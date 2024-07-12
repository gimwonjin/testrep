import React from "react";
import styled from "styled-components";

const SIZE = {
  large: 25,
  mediue: 20,
  smail: 16,
};

const INPUTS = styled.input`
  outline: none;
  border: 2px solid ${({$error}) => $error ? '#f44336' : "#eeeeee"};
  padding: 16px;
  border-radius: ${({ $round }) => ($round ? "9999px" : "5px")};
  font-size: ${({ size }) => SIZE[size] ?? SIZE["mediue"]}px;

  &:focus {
    border-color: ${({ $error }) => ($error ? "#f44336" : "#7760b4")};
  }
`;
const Container = styled.div`
  ${INPUTS} {
    margin: 10px;
  }
`;

export function Practice(props) {
  return (
    <Container>
      <h1>Size</h1>
      <INPUTS size="smail" />
      <INPUTS size="medium" />
      <INPUTS size="1arge" />
      <h1>Round</h1>
      <INPUTS $round />
      <h1>Error</h1>
      <INPUTS $error/>
    </Container>
  );
}
