import React from "react";
import styles from "./Question.module.css";
import Answer from "../components/Answer";
import { useLocation } from "react-router-dom";
import DateText from "../components/DateText";
import Wirter from "../components/Wirter";
import Container from "../components/Container";
import Lined from "../components/Lined";
import Warn from "../components/Warn";
import DOMPurify from "dompurify"
function QusetionPage(props) {
  // const question = useLocation().state.question;
  const { question } = useLocation().state;
  const { title, createdAt, answers, wirter, content } = question;

const sanitizedData = (data) => {
    return { __html: DOMPurify.sanitize(data) }
}

  return (
    <>
      <div className={styles.header}>
        <Container>
          <div className={styles.question}>
            <div className={styles.questionInfo}>
              <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>
                  <DateText value={createdAt} />
                </div>
              </div>
              <Wirter className={styles.auther} wirter={wirter} />
            </div>
            <p
              className={styles.content}
              dangerouslySetInnerHTML={sanitizedData(content)}
            />
          </div>
        </Container>
      </div>
      <Container className={styles.answers}>
        <h2 className={styles.count}>
          <Lined>0개 답변</Lined>
        </h2>
        {answers.length > 0 ? (
          answers.map((answer) => (
            <Answer
              key={answer.id}
              answer={answer}
              className={styles.answerItem}
            />
          ))
        ) : (
          <Warn
            title='답변을 기다리고 있어요.'
            description='이 질문의 첫 번째 답변을 달아주시겠어요?'
          />
        )}
      </Container>
    </>
  );
}

export default QusetionPage;
