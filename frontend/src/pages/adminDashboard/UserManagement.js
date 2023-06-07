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
   FaUsers,
   FaUserAlt,
   FaChalkboardTeacher,
   FaUserShield,
   FaTrashAlt,
} from "react-icons/fa";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../../components/AdminComponents/Search";
import ChangeRole from "../../components/AdminComponents/ChangeRole";

const UserManagement = () => {
   return (
      <>
         <GlobalStyle />
         <InfoTitle>User stats</InfoTitle>
         <InfoRow>
            <InfoBox
               bgColor={"#ffe2e6"}
               circleColor={"#fa5a7c"}
               icon={<FaUsers size={40} />}
               count={"145"}
               desc={"Total Users"}
            />
            <InfoBox
               bgColor={"#fff4de"}
               circleColor={"#ff947a"}
               icon={<FaUserAlt size={40} />}
               count={"120"}
               desc={"Total Students"}
            />
            <InfoBox
               bgColor={"#dcfce7"}
               circleColor={"#3cd756"}
               icon={<FaChalkboardTeacher size={40} />}
               count={"20"}
               desc={"Total Teachers"}
            />
            <InfoBox
               bgColor={"#d5f3fa"}
               circleColor={"#34d7fd"}
               icon={<FaUserShield size={40} />}
               count={"5"}
               desc={"Total Admins"}
            />
         </InfoRow>

         <br></br>

         <UserList>
            <TopRow>
               <h3>Users</h3>
               <Search placeholder="Search users" />
            </TopRow>
            <TableBox>
               <Table striped bordered hover responsive>
                  <thead>
                     <tr class="table-danger">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Change role</th>
                        <th>Enrolled courses</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>mark@gmail.com</td>
                        <td>admin</td>
                        <td></td>
                        <td>
                           <ChangeRole />
                        </td>
                        <th>
                           <FaTrashAlt color="red" />
                        </th>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Mark</td>
                        <td>mark@gmail.com</td>
                        <td>admin</td>
                        <td></td>
                        <td>
                           {" "}
                           <ChangeRole />
                        </td>
                        <th>
                           <FaTrashAlt color="red" />
                        </th>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Mark</td>
                        <td>mark@gmail.com</td>
                        <td>admin</td>
                        <td></td>
                        <td>
                           <ChangeRole />
                        </td>
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

export default UserManagement;
