import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const Messages = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      task,
    };
    if (task) {
      setList([...list, newItem]);
      setTask("");
    }
  };

  //Accordian

  const panelNo = 1;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      Messages
      <TextField
        id="first-name"
        label="Course Name"
        variant="outlined"
        placeholder="Enter Course Name"
        name="firstName"
        margin="normal"
        size="small"
        sx={{ width: 500 }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="outlined" sx={{ width: 200 }} onClick={handleSubmit}>
        + Add New Topic
      </Button>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              
              <Accordion
                expanded={expanded === "panel"}
                onChange={handleChange("panel")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {item.task}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Messages;
