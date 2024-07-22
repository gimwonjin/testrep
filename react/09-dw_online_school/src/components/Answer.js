import React from "react";
import Wirter from "./Wirter";
import Card from "./Card";
import styles from "./Answer.module.css";
import cn from "classnames";
function Answer({ className, answer }) {
  return (
    <div>
      <Card className={cn(styles.answer, className)}>
        <p>답변내용</p>
        <div className={styles.answerInfo}>
          <div className={styles.date}>날짜</div>
          <Wirter writer={answer.writer} />
        </div>
      </Card>
    </div>
  );
}

export default Answer;
