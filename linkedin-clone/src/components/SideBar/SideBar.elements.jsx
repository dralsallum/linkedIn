import styled from "styled-components";
import { Avatar } from "@mui/material";

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;

export const AvatarMe = styled(Avatar)`
  margin-bottom: 10px;
`;

export const SideBarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
`;

export const SideBarTopHeader = styled.h2`
  font-size: 18px;
  background-color: white;
`;

export const SideBarTopSubHeader = styled.h4`
  color: gray;
  font-size: 12px;
  background-color: white;
`;

export const SideBarTopImg = styled.img`
  margin-bottom: -20px;
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

export const SideBarMiddle = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgrey;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const SideBarMiddleStat = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const SideBarMiddleStatView = styled.p`
  color: gray;
  font-size: 13px;
  font-weight: 600;
  background-color: white;
`;

export const SideBarMiddleStatViewNumber = styled.p`
  font-weight: bold;
  color: #0a66c2;
  background-color: white;
`;

export const SideBarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
`;

export const SideBarBottomPara = styled.p`
  background-color: white;
`;

export const SideBarBottomRecentItem = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  background-color: white;

  &:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
`;
export const SideBarBottomRecentHash = styled.span`
  margin-right: 10px;
  margin-left: 5px;
  background-color: white;
`;

export const SideBarBottomRecentPara = styled.p`
  background-color: white;
`;
