import React from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import "./ReviewFrom.css";

function ReviesFrom(props) {
  return (
    <from className="ReviewFrom">
      <div>
        <FileInput />
      </div>
      <div className="From-container">
        <input type="text" placeholder="제목을 입력해주세요." />
        <RatingInput />
        <textarea placeholder="내용을 입력해주세요." />
        <button>확인</button>
      </div>
    </from>
  );
}

export default ReviesFrom;
