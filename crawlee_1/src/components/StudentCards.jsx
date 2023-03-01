import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdIncompleteCircle } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const StudentCards = () => {
  return (
    <Container>
      <>
        <Card
          title={"Enrolled Courses"}
          value={20}
          icon={<BsFillBookmarkFill />}
        />
        <Card
          title={"Active Courses"}
          value={10}
          icon={<MdIncompleteCircle />}
        />
        <Card
          title={"Completed Courses"}
          value={10}
          icon={<AiOutlineFileDone />}
        />
      </>
    </Container>
  );
};

export default StudentCards;
