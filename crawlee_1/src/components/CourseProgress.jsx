import React from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseData } from "../data";

const Wrapper = styled.div`
    
`

const Container = styled.div`
  margin: 5px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  box-shadow: #dadada;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
`;

const ImageContainer = styled.img`
  align-items: center;
  width: 60px;
  height: 60px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: red;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  font-size: 10px;
  height: 90%;
  width: 80%;

  display: flex;
  flex-direction: column;
`;
const CourseCategory = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 300;
  color: rgba(119, 124, 136, 1);
`;
const CourseName = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 3px;
`;

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
