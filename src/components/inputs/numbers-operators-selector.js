import React from "react";
import OperatorSelector from "./operator-selector";
import { numbersOperators } from "../../context/reducer-context";

const NumbersOperatorSelector = () => (
  <OperatorSelector operators={numbersOperators} />
);

export default NumbersOperatorSelector;
