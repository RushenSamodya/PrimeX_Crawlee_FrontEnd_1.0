import React from "react";
import CourseProgress from "./CourseProgress";
import { HiFilter } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import { BottomContainer, BottomText, Container, CourseContainer, FilterIcon, Header, TopSection } from "../styles/componentStyles/MyCoursesStyles";

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
