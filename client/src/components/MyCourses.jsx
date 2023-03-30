import React from "react";
import styled from "styled-components";
import CourseProgress from "./CourseProgress";
import { HiFilter } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";

const Container = styled.div`
  width: 60%;
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

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  top: 0;
`;

const FilterIcon = styled.div`
  font-size: 20px;
  padding: 0px 5px;
  border-radius: 10px;
  color: #f0634c;
  cursor: pointer;
`;

const CourseContainer = styled.div`
  margin-top: 20px;
`;

const BottomContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`
const BottomText = styled.span`
  color: #f0634c;
  font-weight: 300;
  cursor: pointer;
`
const Header = styled.h2``;
const MyCourses = () => {
  return (
    <Container>
      <TopSection>
        <Header>My Courses</Header>
        <FilterIcon>
          {" "}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <HiFilter />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Active Courses</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Completed Courses</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </FilterIcon>
      </TopSection>
      <CourseContainer>
        <CourseProgress />
      </CourseContainer>
      <BottomContainer><BottomText>See more</BottomText></BottomContainer>
    </Container>
  );
};

export default MyCourses;
