import React, { useEffect, useState } from "react";
import FileInput from "./FileInput";
import "./FoodForm.css";
import { addDatas } from "../apl/firebase";
const INITAL_VALUES = {
  title: "",
  content: "",
  calorie: 0,
  imgUrl: null,
};

function sanitize(type, value) {
  switch (type) {
    case "number":
      return Number(value) || 0;

    default:
      return value;
  }
}

function FoodForm(props) {
  const [values, setValues] = useState(INITAL_VALUES);
  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handInputChange = (e) => {
    const { name, value, type } = e.target;
    handleChange(name, sanitize(type, value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultData = await addDatas("food", values);
  }
  
  return (
    <form className="FoodForm" onSubmit={handleSubmit}>
      <FileInput
        className="FoodForm-preview"
        onChange={handleChange}
        name="imgUrl"
        value={values.imgUrl}
      />
      <div className="FoodForm-rows">
        <div className="FoodForm-title-calorie">
          <input
            className="FoodForm-title"
            type="text"
            onChange={handInputChange}
            placeholder="이름을 입력해 주세요"
            name="title"
            value={values.title}
          />
          <input
            className="FoodForm-calorie"
            type="number"
            onChange={handInputChange}
            name="calorie"
            value={values.calorie}
          />
          <button className="FoodForm-submit-button" type="submit">확인</button>
        </div>
        <textarea
          className="FoodForm-content"
          onChange={handInputChange}
          placeholder="내용을 적어주세요"
          name="content"
          value={values.content}
        />
      </div>
    </form>
  );
}

export default FoodForm;
