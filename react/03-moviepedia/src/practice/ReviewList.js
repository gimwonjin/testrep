import React from "react";
import Rating from "../Rating";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewList({ item }) {
  return (
    <div className="ReiewListItem">
      <img className="ReiewListItem-img" src={item.imgUrl} />
      <div className="ReiewListItem-rows">
        <h1 className="ReiewListItem-title">{item.title}</h1>
        <Rating className="ReiewListItem-ratimg" />
        <p className="ReiewListItem-date">{formatDate(item.createdAt)}</p>
        <p className="ReiewListItem-content">{item.content}</p>
        <div className="ReiewListItem-buttons">
          <button className="ReiewListItem-edit-button">수정</button>
          <button className="ReiewListItem-delete-button">삭제</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewList;
