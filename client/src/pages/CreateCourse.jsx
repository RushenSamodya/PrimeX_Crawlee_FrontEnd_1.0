import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SourceIcon from "@mui/icons-material/Source";
import Box from "@mui/material/Box";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Title, EditedListItemText } from "../styles/pageStyles/CreateCourseStyles";


const CreateCourse = () => {
  const [query, setQuery] = useState("Dashboard");
  let [array, setArray] = useState([]);
  let [inputData, setInputData] = useState({ chapter: "", content: "" });
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { chapter, content } = inputData;

  function data(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  //Input Data
  function addInputData() {
    setArray([...array, { chapter, content }]);
    console.log(inputData);
    setInputData({ chapter: "", content: "" });
  }

  //Delete Data
  function deleteData(i) {
    console.log(i, "This row is delete.");
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  //Update Data

  function updateData(i) {
    let { chapter, content } = array[i]; //this row is going to update
    setInputData({ chapter, content });
    setBolin(true);
    setIndex(i);
  }

  function updateInfo() {
    let total = [...array];
    total.splice(index, 1, { chapter, content });
    setArray(total);
    setBolin(false);
    setInputData({ chapter: "", content: "" });
  }

  return (
    <>
      <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
      <Container>
        <Title>Add New Course</Title>
        <TextField
          id="first-name"
          label="Course Name"
          variant="outlined"
          placeholder="Enter Course Name"
          sx={{
            width: 500,
          }}
          margin="normal"
          name="firstName"
        />
        <TextField
          id="last-name"
          label="Course Category"
          variant="outlined"
          placeholder="Enter Course Category"
          sx={{
            width: 500,
          }}
          margin="normal"
          name="lastName"
        />

        <Button
          variant="contained"
          component="label"
          sx={{ width: 300, mt: 2, mb: 2 }}
        >
          Upload Course Cover
          <input hidden accept="image/*" multiple type="file" />
        </Button>

        <TextField
          id="nick-name"
          label="Course Description"
          variant="outlined"
          placeholder="Enter Course Description"
          sx={{
            width: 900,
          }}
          margin="normal"
          name="nickName"
          multiline
          rows={7}
          maxRows={10}
        />

        <Title>Add Course Content</Title>

        <TextField
          id="outlined-basic"
          label="Chapter Name"
          variant="outlined"
          margin="dense"
          name="chapter"
          sx={{
            width: 500,
          }}
          value={inputData.chapter || ""}
          onChange={data}
        />
        <TextField
          id="outlined-basic"
          label="Add Content"
          variant="outlined"
          margin="dense"
          name="content"
          sx={{
            width: 500,
          }}
          value={inputData.content || ""}
          onChange={data}
          multiline
          maxRows={4}
        />

        <Button
          variant="outlined"
          margin="dense"
          sx={{
            width: 500,
            mb: "30px",
          }}
          onClick={!bolin ? addInputData : updateInfo}
          click
        >
          {!bolin ? "Add" : "Update"}
        </Button>
        {array &&
          array.map((item, i) => {
            return (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  bgcolor: "background.paper",
                }}
                key={i}
              >
                <Divider sx={{ bgcolor: "black" }} />
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ViewHeadlineIcon />
                      </ListItemIcon>
                      <EditedListItemText primary={item.chapter} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <SourceIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.content} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <IconButton
                      set
                      sx={{ color: "red" }}
                      aria-label="delete"
                      onClick={() => deleteData(i)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      set
                      sx={{ color: "black" }}
                      aria-label="delete"
                      onClick={() => updateData(i)}
                    >
                      <EditIcon />
                    </IconButton>
                  </ListItem>
                </List>
                <Divider sx={{ bgcolor: "black" }} />
              </Box>
            );
          })}
        <Button
          variant="contained"
          component="label"
          sx={{ width: 100, mt: 2, mb: 2 }}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default CreateCourse;
