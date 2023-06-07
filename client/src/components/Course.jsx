import React from "react";
import { CourseData } from "../data";
import {Container,CourseCategory,CourseName,Divider,DividerContainer,ImageContainer,InfoContainer, Wrapper } from "../styles/componentStyles/CourseStyles";

const Course = () => {
  return (
    <Wrapper CourseData={CourseData}>
      {CourseData.map((item) => (
        <Container>
          <ImageContainer src={item.image} />
          <InfoContainer>
            <CourseCategory>{item.category}</CourseCategory>
            <DividerContainer>
              <Divider />
            </DividerContainer>

            <CourseName>{item.coursename}</CourseName>
          </InfoContainer>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Course;
