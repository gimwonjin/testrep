import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import Button from "../components/Button";
import Card from "../components/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import getCourseColor from "../utils/getCourseColor";
import { getData } from "../api/firebase";
import styled from "./CoursePage.module.css";

function CoursePage() {
  const props = useLocation();
  const { pathname } = props;
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState();

  // undefined.code
  // undefined 여기서 그냥 끝
  //   if(course) {
  //     getCourseColor(course.code)
  //   }
  const courseColor = getCourseColor(course?.code);
  const headerStyle = {
    borderColor: courseColor,
  };

  const handleAddWishlistClick = () => {
    const member = JSON.parse(localStorage.getItem("member"));

    if (member) {
    } else {
      alert("로그인을 해주세요");
      navigate("/login", { state: pathname });
    }
  };

  const handleLoad = async () => {
    const resultData = await getData("courses", {
      field: "slug",
      condition: "==",
      value: courseSlug,
    });
    setCourse(resultData);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <div className={styled.header} style={headerStyle}>
        <Container className={styled.content}>
          <CourseIcon photoUrl={course?.photoUrl} />
          <h1 className={styled.title}>{course?.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
          <p className={styled.summary}>{course?.summary}</p>
        </Container>
      </div>
      <Container className={styled.topics}>
        {course?.topics.map(({ topic }) => {
          return (
            <Card key={topic.slug} className={styled.topic}>
              <h3 className={styled.title}>{topic.title}</h3>
              <p className={styled.summary}>{topic.summary}</p>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default CoursePage;
