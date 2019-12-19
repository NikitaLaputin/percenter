import React from "react";
import { setPercent } from "../../context/reducer-context";
import BasicInput from "./basic-input";

const PercentInput = () => (
  <BasicInput type="percent" onChange={setPercent} postfix="%" />
);

export default PercentInput;
