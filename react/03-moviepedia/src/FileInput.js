import React from "react";
import placeholderImg from "./assets/preview-placeholder.png";
import "./FileInput.css";
import resetImg from "./assets/ic-reset.png";

function FileInput({ name, setFile }) {
  const handleFileChange = (e) => {
    const nextFile = e.target.files[0];
    setFile(name,nextFile);
  };

  return (
    <div className="FileInput">
      <img className="FileInput-preview" src={placeholderImg} />
      <input
        type="file"
        accept="image/*"
        className="FileInput-hidden-overlay"
        onChange={handleFileChange}
      />
      <button className="FileInput-clear-button">
        <img src={resetImg} />
      </button>
    </div>
  );
}

export default FileInput;
