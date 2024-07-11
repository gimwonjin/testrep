import React from "react";
import Input from "./Input";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  ${Input} {
    display: block;
    width: 100%;
    margin: 8px 0 16px;
    box-sizing: border-box;
  }
`;
export function Practice(props) {
  return (
    <Container>
      <h1>로그인</h1>
      <label htmlFor="email">Email</label>
      <Input type="text" id="email" placeholder="styled@Dw.kr" />
      <label htmlFor="passwrod">Passwrod</label>
      <Input type="passwrod" id="passwrod" placeholder="비밀번호" />
    </Container>
  );
}
