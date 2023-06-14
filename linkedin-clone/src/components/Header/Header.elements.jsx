import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  justify-content: space-evenly;
  border-bottom: 1px solid lightgray;
  padding: 10px 0px;
  width: 100%;
  z-index: 999;
`;

export const HeaderContainerLeft = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
`;

export const HeaderImg = styled.img`
  object-fit: contain;
  height: 40px;
  margin-right: 10px;
  background-color: white;
`;

export const HeaderSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 35px;
  color: gray;
  background-color: #eef3f8;
`;

export const HeaderInput = styled.input`
  outline: none;
  border: none;
  background: none;
`;

export const HeaderContainerRight = styled.div`
  display: flex;
  background-color: white;
`;
