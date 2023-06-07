import React from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { CourseData } from "../data";
import { Container } from "../styles/componentStyles/PopularCoursesStyles";

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
