import React from "react";
import {
  HeaderContainer,
  HeaderContainerRight,
  HeaderContainerLeft,
  HeaderSearch,
  HeaderImg,
  HeaderInput,
} from "./Header.elements";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
import linkedinLogo from "../../assets/linkedinLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MyAvatar from "../../assets/MyAvatar.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContainerLeft>
        <HeaderImg src={linkedinLogo} alt="" />
        <HeaderSearch>
          <SearchIcon style={{ backgroundColor: "#eef3f7" }} />
          <HeaderInput type="text" />
        </HeaderSearch>
      </HeaderContainerLeft>
      <HeaderContainerRight>
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="messages" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={MyAvatar} title={"me"} />
      </HeaderContainerRight>
    </HeaderContainer>
  );
};

export default Header;
