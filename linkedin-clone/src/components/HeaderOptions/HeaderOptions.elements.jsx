import styled from "styled-components";
import { Avatar } from "@mui/material";

export const HeaderOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;
  transition: color 0.4s;
    background-color: white;

    &:hover {
    color: black;
`;

export const HeaderTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  background-color: white;
`;

export const MyAvatar = styled(Avatar)`
  object-fit: contain;
  height: 25px !important;
  width: 25px !important;
  background-color: white;
`;
