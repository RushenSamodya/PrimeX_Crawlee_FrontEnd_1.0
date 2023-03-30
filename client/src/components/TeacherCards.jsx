import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { MdIncompleteCircle } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbSum } from "react-icons/tb";
import { IoMdSchool } from "react-icons/io";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;
const TeacherCards = () => {
  return (
    <Container>
      <>
        <Card
          title={"Active Courses"}
          value={20}
          icon={<MdIncompleteCircle />}
        />
        <Card
          title={"Completed Courses"}
          value={10}
          icon={<AiOutlineFileDone />}
        />
        <Card title={"Total Courses"} value={10} icon={<TbSum />} />
        <Card title={"Total Students"} value={10} icon={<IoMdSchool />} />
      </>
    </Container>
  );
};

export default TeacherCards;
