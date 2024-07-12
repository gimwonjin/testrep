import React from "react";
import styled from "styled-components";
import TermsOfService from "../04/TermsOfService";
import Button from "./Button";

const StyledTermsOfService = styled(TermsOfService)`
  background-color: #ededed;
  width: 400px;
  margin: auto;
  border-radius: 8px;
  padding: 16px;
`;

const SubmitButton = styled(Button)`
  background-color: #de117d;
  width: 200px;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #f5070f;
  }
`;

function Inheritance(props) {
  return (
    <div>
      <StyledTermsOfService />
      <SubmitButton>계속하기</SubmitButton>
    </div>
  );
}

export default Inheritance;
