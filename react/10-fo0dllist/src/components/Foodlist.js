import React from "react";

import "./Foodlist.css";

function FoodListItem({ item }) {
  const { title, createdAt, content, calorie, imgUrl } = item;
  return (
    <div className="FoodListItem">
      <img className="FoodListItem-preview" src={imgUrl} />
      <div className="FoodListItem-rows">
        <div className="FoodListItem-title-calorie">
          <h1 className="FoodListItem-title">{title}</h1>
          <span className="FoodListItem-calorie">{calorie}kcal</span>
        </div>
        <p className="FoodListItem-content">{content}</p>
        <div className="FoodListItem-data-button">
          <p className="FoodListItem-date">{formatDate(createdAt)}</p>
          <div className="FoodListItem-button">
            <button className="FoodListItem-edit-button">수정</button>
            <button className="FoodListItem-delete-button">삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatDate(vaule) {
  const date = new Date(vaule);
  return `${date.getFullYear()}. ${date.getMonth + 1}. ${date.getDate()}.`;
}

function Foodlist({ items }) {
  return (
    <ul className="FoodList">
      {items.map((item) => {
        return (
          <li key={item.docId}>
            <FoodListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default Foodlist;
