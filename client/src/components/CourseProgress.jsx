import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseData } from "../data";
import { Container, CourseCategory, CourseName, ImageContainer, InfoContainer, Wrapper } from "../styles/componentStyles/CourseProgressStyles";


const CourseProgress = () => {
  const now = 60;
  return (
    <Wrapper CourseData={CourseData}>
    {CourseData.map(item=>(<Container>
      <ImageContainer src={item.image}/>
      <InfoContainer>
        <CourseCategory>{item.category}</CourseCategory>
        <CourseName>{item.coursename}</CourseName>
        <ProgressBar  now={now} label={`${now}%`} />
      </InfoContainer>
    </Container>))} 
    </Wrapper>
  );
};

export default CourseProgress;
