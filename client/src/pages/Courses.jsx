import React, { useContext, useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  Button,
  Container,
  CourseBar,
  CourseCategory,
  CourseContainer,
  CourseInstructor,
  CourseName,
  CourseTab,
  CourseType,
  CourseTypeSection,
  CreateCourse,
  DeleteButton,
  Divider,
  EditButton,
  Header,
  Icon,
  ImageContainer,
  InfoContainer,
  TopSection,
  Wrapper,
} from "../styles/pageStyles/CoursesStyles";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

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

  const [value, setValue] = React.useState(0);

  const [courses, setCourses] = useState({
    items: [],
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const navigateToCreateCourse = () => {
    navigate("/create-course");
  };

  const [query, setQuery] = useState("Courses");

  const { user } = useContext(AuthContext);

  const courseIds = [];
  const enrolledCourseIds = [];

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/courses")
      .then(({ data }) => {
        console.log(data);

        for (let index = 0; index < data.length; index++) {
          courseIds.push(data[index]._id);
        }
        console.log("courseIds", courseIds);
        axios
          .get(`http://localhost:8800/api/users/${user._id}`)
          .then(({ data }) => {
            for (let index = 0; index < data.enrolledCourses.length; index++) {
              enrolledCourseIds.push(data.enrolledCourses[index].courseId);
            }
            console.log("enrolledCoursIds", enrolledCourseIds);
            const inverseElements = courseIds.filter(
              (item) => !enrolledCourseIds.includes(item)
            );

            console.log("inverseElements", inverseElements);

            for (let index = 0; index < inverseElements.length; index++) {
              axios
                .get(
                  `http://localhost:8800/api/courses/${inverseElements[index]}`
                )
                .then(({ data }) => {
                  setCourses((prevState) => ({
                    ...prevState,
                    items: [...prevState.items, data],
                  }));
                })
                .catch((e) => {
                  console.log(e);
                });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    console.log("Use Effect Courses", courses);
  }, [courses]);

  const [filteredCourses, setFilteredCourses] = useState([]);
  let filteredArray = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/courses`)
      .then(({ data }) => {

        filteredArray = data.filter((item) => item.instructor === user._id);
        setFilteredCourses(filteredArray);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log("teacher's courses",filteredCourses)

  return (
    <>
      <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
      <Container>
        {user.isTeacher ? (
          <>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  textColor="inherit"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#f0634c",
                    },
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
                      <Button onClick={navigateToCreateCourse}>
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
                    <Wrapper>
                      {filteredCourses.map((item,index) => (
                        <CourseBar key={index}>
                          <ImageContainer src={
                                item.courseCover.length != 0
                                  ? item.courseCover[0].url
                                  : ""
                              } />
                          <InfoContainer>
                            <CourseCategory>{item.courseCategory}</CourseCategory>
                            <CourseName>{item.courseName}</CourseName>
                            
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
                    <Wrapper>
                      {courses.items.length !== 0 &&
                        courses.items.map((item, index) => (
                          <Link key={index} to={`/courses/${item._id}`}>
                          <CourseBar >
                            <ImageContainer
                              src={
                                item.courseCover.length != 0
                                  ? item.courseCover[0].url
                                  : ""
                              }
                            />
                            <InfoContainer>
                              <CourseCategory>
                                {item.courseCategory}
                              </CourseCategory>
                              <CourseName>{item.courseName}</CourseName>
                              <CourseInstructor>
                                By: {item.instructorName}
                              </CourseInstructor>
                            </InfoContainer>
                          </CourseBar>
                          </Link>
                        ))}
                    </Wrapper>
                  </CourseTab>
                </CourseContainer>
              </TabPanel>
            </Box>
          </>
        ) : (
          <>
            <CourseContainer>
              <TopSection>
                <Header>Courses</Header>
              </TopSection>
              <CourseTab>
                <Wrapper>
                  {courses.items.length !== 0 &&
                    courses.items.map((item, index) => (
                      <CourseBar key={index}>
                        <ImageContainer
                          src={
                            item.courseCover.length != 0
                              ? item.courseCover[0].url
                              : ""
                          }
                        />
                        <InfoContainer>
                          <CourseCategory>{item.courseCategory}</CourseCategory>
                          <CourseName>{item.courseName}</CourseName>
                          <CourseInstructor>
                            By: {item.instructorName}
                          </CourseInstructor>
                        </InfoContainer>
                      </CourseBar>
                    ))}
                </Wrapper>
              </CourseTab>
            </CourseContainer>
          </>
        )}
      </Container>
    </>
  );
}

export default Courses;
