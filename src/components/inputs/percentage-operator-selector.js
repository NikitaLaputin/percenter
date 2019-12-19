import React from "react";
import OperatorSelector from "./operator-selector";
import { percentageOperators } from "../../context/reducer-context";

const PercentageOperatorSelector = () => (
  <OperatorSelector operators={percentageOperators} />
);

export default PercentageOperatorSelector;
