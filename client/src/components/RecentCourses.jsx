import React from "react";
import Course from "./Course";
import { Container, CourseContainer, Title } from "../styles/componentStyles/RecentCoursesStyles";




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
