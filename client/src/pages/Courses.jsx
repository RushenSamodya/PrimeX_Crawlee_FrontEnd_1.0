import React, { useState } from "react";
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
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Button, Container, CourseBar, CourseCategory, CourseContainer, CourseName, CourseTab, CourseType, CourseTypeSection, CreateCourse, DeleteButton, Divider, EditButton, Header, Icon, ImageContainer, InfoContainer, TopSection, Wrapper } from "../styles/pageStyles/CoursesStyles";

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

  const [query, setQuery] = useState("Courses");

  return (
    <>
    <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
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
    </>
  );
}

export default Courses;
