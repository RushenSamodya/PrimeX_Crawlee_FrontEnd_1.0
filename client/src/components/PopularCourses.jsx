import React from "react";
import styled from "styled-components";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { CourseData } from "../data";

const Container = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
const PopularCourses = () => {
  return (
    <Container>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Course Name</th>
            <th>Enrolled</th>
            <th>Status</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {CourseData.map((item) => (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{item.coursename}</p>
                  </div>
                </div>
              </td>
              <td>{item.enrolled}</td>
              <td>
                <MDBBadge color="success" pill>
                  {item.status}
                </MDBBadge>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </Container>
  );
};

export default PopularCourses;
