import React from "react";
import {
  HeaderOptionsContainer,
  HeaderTitle,
  MyAvatar,
} from "./HeaderOptions.elements";

const HeaderOptions = ({ avatar, Icon, title }) => {
  return (
    <HeaderOptionsContainer>
      {Icon && <Icon className="headerOption__icon" />}

      {avatar && <MyAvatar src={avatar} />}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderOptionsContainer>
  );
};

export default HeaderOptions;
