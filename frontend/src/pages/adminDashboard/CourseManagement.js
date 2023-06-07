import InfoBox from "../../components/AdminComponents/InfoBox";
import {
   GlobalStyle,
   InfoRow,
   InfoTitle,
   TableBox,
   TopRow,
   UserList,
} from "../../components/styles/Admin.styled";
import {
    FaBook,
    FaBan,
   FaTrashAlt,
} from "react-icons/fa";
import {
    VscVmActive
} from "react-icons/vsc";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../../components/AdminComponents/Search";
import ChangeCourseStatus from "../../components/AdminComponents/ChangeCourseStatus";

const CourseManagement = () => {
   return (
      <>
         <GlobalStyle />
         <InfoTitle>Course stats</InfoTitle>
         <InfoRow>
            <InfoBox
               bgColor={"#ffe2e6"}
               circleColor={"#fa5a7c"}
               icon={<FaBook size={40} />}
               count={"65"}
               desc={"Total Courses"}
               className="course"
            />
            <InfoBox
               bgColor={"#fff4de"}
               circleColor={"#ff947a"}
               icon={<VscVmActive size={40} />}
               count={"40"}
               desc={"Active Courses"}
               className="course"
            />
            <InfoBox
               bgColor={"#dcfce7"}
               circleColor={"#3cd756"}
               icon={<FaBan size={40} />}
               count={"25"}
               desc={"Suspended Courses"}
               className="course"
            />
            
         </InfoRow>


         <UserList>
            <TopRow>
               <h3>Courses</h3>
               <Search placeholder="Search courses"/>
            </TopRow>
            <TableBox>
               <Table striped bordered hover responsive>
                  <thead>
                     <tr class="table-danger">
                        <th>Id</th>
                        <th>Course name</th>
                        <th>Teacher's name</th>
                        <th>status</th>
                        <th>Change status</th>
                        <th>Enrolled students</th>
                        <th>Active students</th>
                        <th>Finished students</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>John</td>
                        <td>active</td>
                        <td>
                           <ChangeCourseStatus />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>
                           <FaTrashAlt color="red" />
                        </th>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Mark</td>
                        <td>John</td>
                        <td>suspended</td>
                        
                        <td> <ChangeCourseStatus /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>
                           <FaTrashAlt color="red" />
                        </th>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Mark</td>
                        <td>John</td>
                        <td>active</td>
                        
                        <td><ChangeCourseStatus /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>
                           <FaTrashAlt color="red" />
                        </th>
                     </tr>
                  </tbody>
               </Table>
            </TableBox>
         </UserList>
      </>
   );
};

export default CourseManagement;
