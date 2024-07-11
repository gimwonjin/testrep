import React from "react";
import styles from "./ColorSurvey.module.css";


function ColorSurvey({item}) {
  const {colorCode, createdAt, updatedAt, id, mbti} = item;
  return (
    <div className={styles.colorSurvey}>
      <div className={styles.id}>{id}</div>
      <div className={styles.mbti}>{mbti}</div>
      <div className={styles.arrow}>
        <img className={styles.arrowIcon} src="/images/arrow.svg" />
      </div>
      <div
        className={styles.colorChip}
        style={{ backgroundColor: "#d9d9d9" }}
      ></div>
      <div className={styles.colorCode}>{colorCode}</div>
    </div>
    // 컴포넌트 렌더링 !== 화면에 그려진다.
    // 컴포넌트 코드 읽고
    // => 렌더링

    // 리액트 컴포런트 라이프사이클
    // render() => constructor() => comoinentDidMount() => COmponentDidUqdate()
    // => componenUnmount
    // reder: 컴포런트의 기능과 모양을 정의 하는 함수로 리액트 요소를 반환한다.
    // constructor: 컴포넌트를 만들때 처음으로 호출되는 함수이다
  );
}

export default ColorSurvey;
