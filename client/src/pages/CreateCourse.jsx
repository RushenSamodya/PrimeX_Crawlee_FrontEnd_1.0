import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import styled from "styled-components";
import {
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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

const Title = styled.div`
  font-size: 25px;
  margin-left: 25px;
`;

function getSteps() {
  return ["Course Info", "Course Outline"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="Course Name"
            variant="outlined"
            placeholder="Enter Course Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Course Category"
            variant="outlined"
            placeholder="Enter Course Category"
            fullWidth
            margin="normal"
            name="lastName"
          />

          <Button variant="contained" component="label" sx={{ mt: 2, mb: 2 }}>
            Upload Course Cover
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <TextField
            id="nick-name"
            label="Course Description"
            variant="outlined"
            placeholder="Enter Course Description"
            fullWidth
            margin="normal"
            name="nickName"
            multiline
            rows={3}
            maxRows={4}
          />
        </>
      );

    case 1:
      return (
        //CourseBuilder
        <></>
      );

    default:
      return "unknown step";
  }
}

const CreateCourse = () => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);


  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  //   const isStepOptional = (step) => {
  //     return step === 1 || step === 2;
  //   };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [query, setQuery] = useState("Dashboard");

  return (
    <>
      <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
      <Container>
        <Title>Add New Course</Title>
        <Paper component={Box} p={3}>
          <div>
            <Stepper alternativeLabel activeStep={activeStep}>
              {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step {...stepProps} key={index}>
                    <StepLabel {...labelProps}>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {activeStep === steps.length ? (
              <Typography variant="h3" align="center" sx={{ mt: 4, mb: 4 }}>
                Course Has Been Saved.
              </Typography>
            ) : (
              <>
                <form>{getStepContent(activeStep)}</form>
                <Button
                  hidden={activeStep === 0}
                  onClick={handleBack}
                  sx={{ m: 2 }}
                >
                  back
                </Button>

                <Button
                  hidden={activeStep === 1}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ m: 2 }}
                >
                  Next
                </Button>
                <Button
                  hidden={activeStep === 0}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ m: 2 }}
                >
                  Finish
                </Button>
              </>
            )}
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default CreateCourse;
