import AddIcon from "@mui/icons-material/Add";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Container,
  DynamicFieldWrapper,
  FieldWrapper,
  StyledButton,
  StyledErrorMessage,
  StyledField,
  StyledLabel,
  StyledSecondaryButton,
} from "../styles/pageStyles/CreateCourseStyles";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const initialValues = {
  courseName: "",
  description: "",
  instructor: "",
  courseCover: "",
  lessons: [{ title: "", description: "", material: "" }],
};

const onSubmit = async (values) => {
  // console.log("Form data", values);
  try {
    const response = await axios.post(
      "http://localhost:8800/api/courses",
      values
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const validationSchema = Yup.object({
  courseName: Yup.string().required("Required"),
  instructor: Yup.string().required("Required"),
});

const CreateCourse = () => {
  const [query, setQuery] = useState("Create Course");

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <>
      <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "50%",
            }}
          >
            <FieldWrapper>
              <StyledLabel htmlFor="courseName">Course Name</StyledLabel>
              <StyledField type="text" id="courseName" name="courseName" />
              <StyledErrorMessage component="span" name="courseName" />
            </FieldWrapper>

            <FieldWrapper>
              <StyledLabel htmlFor="description">Description</StyledLabel>
              <StyledField
                type="textarea"
                id="description"
                name="description"
              />
            </FieldWrapper>

            <FieldWrapper>
              <StyledLabel htmlFor="instructor">Instructor Name</StyledLabel>
              <StyledField type="text" id="instructor" name="instructor" />
            </FieldWrapper>

            <FieldWrapper>
              <StyledLabel htmlFor="courseCover">
                Course Cover Image
              </StyledLabel>
              <Field type="file" id="courseCover" name="courseCover" />
            </FieldWrapper>

            <FieldWrapper>
              <h4 htmlFor="addLessons">Add Lessons</h4>
            </FieldWrapper>

            <FieldArray name="lessons">
              {(fieldArrayProps) => {
                // console.log("fieldArrayProps", fieldArrayProps);
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { lessons } = values;
                return (
                  <div>
                    {lessons.map((lesson, index) => (
                      <div key={index}>
                        <DynamicFieldWrapper>
                          <StyledLabel htmlFor="instructor">Title</StyledLabel>
                          <StyledField
                            type="text"
                            name={`lessons[${index}].title`}
                          />
                          <StyledLabel htmlFor="instructor">
                            Description
                          </StyledLabel>
                          <StyledField
                            type="text"
                            name={`lessons[${index}].description`}
                          />
                          <StyledLabel htmlFor="instructor">
                            Upload Material
                          </StyledLabel>
                          <Field
                            type="file"
                            name={`lessons[${index}].material`}
                          />

                          {
                            <StyledSecondaryButton
                              type="button"
                              onClick={() => remove(index)}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Remove
                                <DeleteIcon fontSize="small" />
                              </div>
                            </StyledSecondaryButton>
                          }
                        </DynamicFieldWrapper>
                      </div>
                    ))}

                    <StyledButton type="button" onClick={() => push("")}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        Add
                        <AddIcon fontSize="small" />
                      </div>
                    </StyledButton>
                  </div>
                );
              }}
            </FieldArray>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default CreateCourse;
