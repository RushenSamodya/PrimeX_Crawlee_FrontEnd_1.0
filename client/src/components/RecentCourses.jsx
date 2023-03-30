import React from "react";
import styled from "styled-components";
import Course from "./Course";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const CourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  overflow: hidden;
  height: 260px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const RecentCourses = () => {
  return (
    <Container>
      <Title>Recently Accessed Courses</Title>
      <CourseContainer>
        <Course />
      </CourseContainer>
    </Container>
  );
};

export default RecentCourses;
