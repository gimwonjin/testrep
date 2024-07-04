import React, { useState } from "react";
import FileInput from "../FileInput";
import RatingInput from "../RatingInput";
import "./ReviewFrom.css";



function ReviewFrom(props) {
    const [values, setValues] = useState({});

    const handleChange = (name, value) => {
        setValues((prevValue) => ({...prevValue, [name]: value}))
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        handleChange(name, value)
    }

  return (
    <from className="ReviewFrom">
      <div>
        <FileInput name="imgUrl" setFile={handleChange} />
      </div>
      <div className="From-container">
        <input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
          onChange={handleInputChange}
        />
        <RatingInput />
        <textarea
          name="content"
          placeholder="내용을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
    </from>
  );
}

export default ReviewFrom;
