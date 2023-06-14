import React from "react";
import {
  InputOptionContainer,
  InputOptionHeader,
} from "./InputOption.elements";

const InputOption = ({ Icon, title, color }) => {
  return (
    <InputOptionContainer>
      <Icon style={{ color: color }} />
      <InputOptionHeader>{title}</InputOptionHeader>
    </InputOptionContainer>
  );
};

export default InputOption;
