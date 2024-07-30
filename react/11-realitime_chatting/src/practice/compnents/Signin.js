import React from "react";
import * as FcIcons from "react-icons/fc";

function Signin(props) {
  return (
    <>
      <button className="sign-in">
        <FcIcons.FcGoogle />
        <span>
          <b>구글로 로그인 하기</b>
        </span>
      </button>
      <span className="notice">
        🦁아이폰(ios)은 safari, chrome <br />
        등으로 로그인 해주세요.🙏
      </span>
    </>
  );
}

export default Signin;
