import { ListItemText } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 15px 5px 0px 260px;
  padding: 5px 5px 5px 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 25px;
  margin: 40px 0px;
`;

export const EditedListItemText = styled(ListItemText)`
  color: black;
  font-size: 80px;
  font-weight: 800;
`;
