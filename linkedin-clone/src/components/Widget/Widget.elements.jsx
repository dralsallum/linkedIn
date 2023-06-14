import styled from "styled-components";

export const WidgetContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  height: fit-content;
  padding--bottom: 10px;
`;
export const WidgetHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const WidgetHeader = styled.h2`
  font-size: 14px;
`;

export const WidgetArticle = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
    border-radius: 8px;
  }
`;

export const WidgetArticleLeft = styled.div`
  color: #0177b7;
  margin-right: 5px;
`;

export const WidgetArticleRight = styled.div`
  flex: 1;
`;

export const WidgetArticleRightHeader = styled.h4`
  font-size: 14px;
`;

export const WidgetArticleRightPara = styled.p`
  font-size: 12px;
  color: gray;
`;
