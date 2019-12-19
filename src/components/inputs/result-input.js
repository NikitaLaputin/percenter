import React from "react";
import { setResult } from "../../context/reducer-context";
import BasicInput from "./basic-input";

const ResultInput = () => <BasicInput type="result" onChange={setResult} />;

export default ResultInput;
