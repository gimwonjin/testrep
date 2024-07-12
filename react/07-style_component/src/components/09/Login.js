import React from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import Button2 from "./Button2";
import styled from "styled-components";
import KakaoButton from "./KakaoButton";

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
  ${Input} {
    margin-bottom: 16px;
  }
`;
const Loge = styled.h1`
  font-family: Pretendard;
  font-size: 40px;
  text-align: center;
  background-image: linear-gradient(135deg, aqua, purple);
  background-clip: text;
  color: transparent;
`;

const Description = styled.div`
  color: #848187;
  text-align: center;
`;

const Lable = styled.label`
  color: #e1c6f7;
`;

function Login(props) {
  return (
    <Container>
      <Loge>Dw 온라인스쿨</Loge>
      <Description>
        회원인 아니신가요? <Link>회원가입하기</Link>
      </Description>
      <form>
        <Lable htmlFor="email">이메일</Lable>
      </form>
      <Input type="email" id="email" placeholder="styled@Dw.kr" />
      <form>
        <Lable htmlFor="password">비밀번호</Lable>
      <Input type="password" id="password" placeholder="비밀번호" />
      <Button>로그인하기</Button>
      </form>
      <KakaoButton>카카오 로그인</KakaoButton>
    </Container>
  );
}

export default Login;
