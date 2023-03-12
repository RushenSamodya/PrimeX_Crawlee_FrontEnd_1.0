import React from "react";
import styled from "styled-components";
import { CourseData } from "../data";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  margin: 15px 5px 0px 260px;
  padding: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 20px;
  width: 2px;
  margin: 0px 20px;
  background-color: rgba(119, 124, 136, 1);
`;

const CourseContainer = styled.div`
  height: 100%;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h4`
  margin-left: 20px;
`;

const CreateCourse = styled.div``;
const Button = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: rgba(240, 99, 76, 1);
  color: white;
  transition: all 0.1s ease-in;
  &:hover {
    padding: 13px;
  }
`;

const CourseTypeSection = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 14px;
  color: rgba(119, 124, 136, 1);
`;
const CourseType = styled.div``;

const CourseTab = styled.div`
  width: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  flex: 9;
  width: 100%;
`;

const CourseBar = styled.div`
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
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const EditButton = styled.button`
  padding: 5px 8px;
  border-radius: 10px;
  &:hover {
    padding: 6px 9px;
  }
`;
const DeleteButton = styled.button`
  padding: 5px 8px;
  border-radius: 10px;
  border: 2px solid rgba(240, 99, 76, 1);
  color: rgba(240, 99, 76, 1);
  &:hover {
    padding: 6px 9px;
  }
`;

function Courses() {
  const now = 60;
  const teacher = true;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const navigateToCreateCourse = () => {
    navigate('/create-course');
  };

  return (
    
    <Container>
      {teacher ? (<><Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#f0634c",
                  }
                }}
          >
            <Tab label="Teaching" {...a11yProps(0)} />
            <Tab label="Learning" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <CourseContainer>
        <TopSection>
          <Header>Courses</Header>
          <CreateCourse>
            <Button
              onClick={navigateToCreateCourse}
            >
              <b>+</b> &nbsp;Create Course
            </Button>
          </CreateCourse>
        </TopSection>

        <CourseTypeSection>
          <CourseType>All Courses</CourseType>
          <Divider />
          <CourseType>Published</CourseType>
          <Divider />
          <CourseType>Draft</CourseType>
          <Divider />
          <CourseType>Archived</CourseType>
        </CourseTypeSection>
        <CourseTab>
          <Wrapper CourseData={CourseData}>
            {CourseData.map((item) => (
              <CourseBar>
                <ImageContainer src={item.image} />
                <InfoContainer>
                  <CourseCategory>{item.category}</CourseCategory>
                  <CourseName>{item.coursename}</CourseName>
                  <ProgressBar now={now} label={`${now}%`} />
                </InfoContainer>
                <Icon>
                  <EditButton>
                    <MdEdit />
                  </EditButton>
                  <DeleteButton>
                    <AiFillDelete />
                  </DeleteButton>
                </Icon>
              </CourseBar>
            ))}
          </Wrapper>
        </CourseTab>
      </CourseContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <CourseContainer>
        <TopSection>
          <Header>Courses</Header>
        </TopSection>
        <CourseTab>
          <Wrapper CourseData={CourseData}>
            {CourseData.map((item) => (
              <CourseBar>
                <ImageContainer src={item.image} />
                <InfoContainer>
                  <CourseCategory>{item.category}</CourseCategory>
                  <CourseName>{item.coursename}</CourseName>
                  <ProgressBar now={now} label={`${now}%`} />
                </InfoContainer>
              </CourseBar>
            ))}
          </Wrapper>
        </CourseTab>
      </CourseContainer>
        </TabPanel>
      </Box></>) :(<><CourseContainer>
        <TopSection>
          <Header>Courses</Header>
        </TopSection>
        <CourseTab>
          <Wrapper CourseData={CourseData}>
            {CourseData.map((item) => (
              <CourseBar>
                <ImageContainer src={item.image} />
                <InfoContainer>
                  <CourseCategory>{item.category}</CourseCategory>
                  <CourseName>{item.coursename}</CourseName>
                  <ProgressBar now={now} label={`${now}%`} />
                </InfoContainer>
              </CourseBar>
            ))}
          </Wrapper>
        </CourseTab>
      </CourseContainer></>)}
      
      
    </Container>
  );
}

export default Courses;
