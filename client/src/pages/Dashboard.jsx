import React from "react";
import styled from "styled-components";
import StudentCards from "../components/StudentCards";
import MyCourses from "../components/MyCourses";
import PopularCourses from "../components/PopularCourses";
import RecentCourses from "../components/RecentCourses";
import Shortcuts from "../components/Shortcuts";
import TeacherCards from "../components/TeacherCards";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 15px 5px 0px 260px;
  padding: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
`;

function Dashboard() {
  const teacher = true;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Container>
      {teacher ? (
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
                  }
                }}
              >
                <Tab  label="Teaching" {...a11yProps(0)} />
                <Tab label="Learning" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TeacherCards />
              <Wrapper>
                <PopularCourses />
                <Shortcuts />
              </Wrapper>
            </TabPanel>
            <TabPanel  value={value} index={1}>
              <StudentCards />
              <RecentCourses />
              <MyCourses />
            </TabPanel>
          </Box>
        </>
      ) : (
        <>
          <StudentCards />
          <RecentCourses />
          <MyCourses />
        </>
      )}
    </Container>
  );
}

export default Dashboard;
