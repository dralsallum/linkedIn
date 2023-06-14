import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";

export const FeedContainer = styled.div`
  flex: 0.6;
  margin: 0 20px;
  padding-top: 20px;
`;

export const CreatePen = styled(CreateIcon)`
  background-color: white;
`;

export const FeedInputContainer = styled.div`
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const Feedinput = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;
  background-color: white;
`;

export const FeedForm = styled.form`
  display: flex;
  width: 100%;
  background-color: white;
`;

export const FeedFormInput = styled.input`
  border: none;
  flex: 1;
  margin-left: 10px;
  outline-width: 0;
  font-weight: 600;
  background-color: white;

  ::placeholder {
    opacity: 0.3;
  }
`;

export const FeedButton = styled.button`
  display: none;
`;

export const FeedInputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
`;
