import React from "react";
import { setNumber } from "../../context/reducer-context";
import BasicInput from "./basic-input";

const NumberInput = () => <BasicInput type="number" onChange={setNumber} />;

export default NumberInput;
