import React from "react";
import {
  WidgetContainer,
  WidgetHeaderContainer,
  WidgetHeader,
  WidgetArticle,
  WidgetArticleLeft,
  WidgetArticleRight,
  WidgetArticleRightHeader,
  WidgetArticleRightPara,
} from "./Widget.elements";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <WidgetArticle>
      <WidgetArticleLeft>
        <FiberManualRecordIcon />
      </WidgetArticleLeft>
      <WidgetArticleRight>
        <WidgetArticleRightHeader>{heading}</WidgetArticleRightHeader>
        <WidgetArticleRightPara>{subtitle}</WidgetArticleRightPara>
      </WidgetArticleRight>
    </WidgetArticle>
  );
  return (
    <WidgetContainer>
      <WidgetHeaderContainer>
        <WidgetHeader>LinkedIn News</WidgetHeader>
        <InfoIcon />
      </WidgetHeaderContainer>
      {newsArticle("Papa ract is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus Uk updates", "Top news - 8322 readers")}
      {newsArticle(
        "Tesla hits record high in sales",
        "Top news - 6775 readers"
      )}
      {newsArticle("Bitcoin is going down fast", "Top news - 5223 readers")}
      {newsArticle("is Redux too good", "Top news - 3443 readers")}
      {newsArticle("React is something Great", "Top news - 2464 readers")}
    </WidgetContainer>
  );
};

export default Widget;
