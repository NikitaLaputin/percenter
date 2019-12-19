import React from "react";
import { setPercent } from "../../context/reducer";
import BasicInput from "./basic-input";

const PercentInput = () => <BasicInput type="percent" onChange={setPercent} />;

export default PercentInput;
