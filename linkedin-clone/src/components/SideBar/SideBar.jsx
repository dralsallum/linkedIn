import React from "react";
import {
  SideBarContainer,
  SideBarTop,
  SideBarTopHeader,
  SideBarTopSubHeader,
  SideBarTopImg,
  SideBarMiddle,
  SideBarMiddleStat,
  SideBarMiddleStatView,
  SideBarMiddleStatViewNumber,
  SideBarBottom,
  SideBarBottomPara,
  AvatarMe,
  SideBarBottomRecentItem,
  SideBarBottomRecentHash,
  SideBarBottomRecentPara,
} from "./SideBar.elements";
import MyAvatar from "../../assets/MyAvatar.png";

const SideBar = () => {
  const recenItem = (topic) => (
    <SideBarBottomRecentItem>
      <SideBarBottomRecentHash>#</SideBarBottomRecentHash>
      <SideBarBottomRecentPara>{topic}</SideBarBottomRecentPara>
    </SideBarBottomRecentItem>
  );
  return (
    <SideBarContainer>
      <SideBarTop>
        <SideBarTopImg src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMXwxMJA3fDBMHxleHBsb3JlLWZlZWR8MXx8fGVufDBfHw%3D&w=1000&q=80" />
        <AvatarMe src={MyAvatar} />
        <SideBarTopHeader>Saud Alsallum</SideBarTopHeader>
        <SideBarTopSubHeader>Dralsallum@gmail.med.gov.com</SideBarTopSubHeader>
      </SideBarTop>
      <SideBarMiddle>
        <SideBarMiddleStat>
          <SideBarMiddleStatView>Who viewed you</SideBarMiddleStatView>
          <SideBarMiddleStatViewNumber>2,553</SideBarMiddleStatViewNumber>
        </SideBarMiddleStat>
        <SideBarMiddleStat>
          <SideBarMiddleStatView>Who viewed you</SideBarMiddleStatView>
          <SideBarMiddleStatViewNumber>2,323</SideBarMiddleStatViewNumber>
        </SideBarMiddleStat>
      </SideBarMiddle>
      <SideBarBottom>
        <SideBarBottomPara>Recent</SideBarBottomPara>
        {recenItem("reactjs")}
        {recenItem("programming")}
        {recenItem("softwareengineering")}
        {recenItem("design")}
        {recenItem("development")}
      </SideBarBottom>
    </SideBarContainer>
  );
};

export default SideBar;
