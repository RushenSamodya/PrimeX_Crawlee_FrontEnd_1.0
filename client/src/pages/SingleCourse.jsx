import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import NavbarHorizontal from "../components/NavbarHorizontal";
import axios from "axios";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
import Accordion from "../components/CustomizedAccordions";
import CustomizedAccordions from "../components/CustomizedAccordions";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Container = styled.div`
  width: 100%;
  padding: 20px 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const Top = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  background: #d1913c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffd194,
    #d1913c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffd194,
    #d1913c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 20px;
  border-radius: 10px;
  width: 70%;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cove2;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;


const Bottom = styled.div`
    width: 70%;
`;

const CourseName = styled.h2`
  font-weight: 700;
  margin-bottom: 30px;
`;

const CourseDesc = styled.div`
  margin-bottom: 20px;
`;

const Ratings = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const InstructorName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const EnrollBtn = styled.button`
    width: fit-content;
    padding: 4px 10px;
    border-radius: 5px;
    background-color: white;
    border: none;
    color: #f0634c;
    font-weight: 600;
`;

const SingleCourse = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [course, setCourse] = useState("");
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/courses/${path}`)
      .then(({ data }) => {
        setCourse(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log("course", course);

  return (
    <>
      <NavbarHorizontal />
      {course && (
        <Container>
          <Header>
            <Top>
              <TopWrapper>
                <ImageContainer src={course.courseCover[0].url} alt="" />

                <InfoContainer>
                  <CourseName>{course.courseName}</CourseName>
                  <CourseDesc>{course.description}</CourseDesc>
                  <Ratings>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Ratings>
                  <InstructorName>
                    Instructor: {course.instructorName}
                  </InstructorName>
                </InfoContainer>
              </TopWrapper>
              <EnrollBtn>Enroll Now</EnrollBtn>
            </Top>
            <Bottom>
            {course.lessons.length !== 0 && course.lessons.map((item, index) => (
                <CustomizedAccordions key={index} topic={item.title} description={item.description}/>
                )) }
            </Bottom>
          </Header>
        </Container>
      )}
    </>
  );
};

export default SingleCourse;
