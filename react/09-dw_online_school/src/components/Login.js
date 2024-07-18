import React, { useState } from "react";
import Input from "./Input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import KakaoButton from "./KakaoButton";
import LoginButton from "./LoginButton";
import { getMember } from "../api/firebase";

const LoginContainer = styled.div`
  width: 400px;
  margin: 40px auto;

  ${LoginButton} {
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
  const { state } = useLocation();
  const navigate = useNavigate();
  const [values, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(function (prevValues) {
      return { ...prevValues, [name]: value };
    });
  };

  const handleLogin = async (e) => {
    // 기본 submit 이벤트를 막는다.
    e.preventDefault();
    // 파이어베이스에 접근해서 이메일가진 member를 조회한다
    const { memberObj, message } = await getMember(values);
    if (Object.keys(memberObj).length === 0) {
      // 로그인 실패
      alert(message);
    } else {
      // 로그인 성공
      localStorage.setItem("member", JSON.stringify(memberObj));
      alert(message);
      navigate(state ? state : "/", { replace: true });
    }
  };

  return (
    <LoginContainer>
      <Loge>DW 온라인스쿨</Loge>
      <Description>
        회원인 아니신가요? <Link>회원가입하기</Link>
      </Description>
      <form onSubmit={handleLogin}>
        <Lable htmlFor="email">이메일</Lable>

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="styled@Dw.kr"
          onChange={handleChange}
        />
        <Lable htmlFor="password">비밀번호</Lable>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <LoginButton>로그인하기</LoginButton>
      </form>
      <KakaoButton>카카오 로그인</KakaoButton>
    </LoginContainer>
  );
}

export default Login;
