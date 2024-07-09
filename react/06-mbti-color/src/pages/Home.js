import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import ColorSurvey from "../componets/ColorSurvey";
import mockItem from "../lib/mock.json";

function Home(props) {
  console.log(styles);
  const [mbti, setMbti] = useState([]);
  useEffect(() => {
    setMbti(mockItem);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.headrContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI별
            <br />
            <span className={styles.accent}>좋아하는컬러</span>
          </h1>
          <div>
            <div className={styles.filter}>
              <img className={styles.removeIcon} src="/images/x.svg" />
            </div>
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/New">
          +새컬러등록하기
        </Link>
        <ul className={styles.itmes}>
            {mbti.map((item) => {
                return <ColorSurvey item={item} />
            })}
            
        </ul>
      </main>
    </div>
  );
}

export default Home;
