import React from "react";
import NumberInput from "../inputs/number-input";
import PercentInput from "../inputs/percent-input";
import ResultInput from "../inputs/result-input";
import OperatorSelector from "../inputs/operator-selector";

const Main = () => (
  <div>
    <PercentInput />
    <OperatorSelector />
    <NumberInput />
    <ResultInput />
  </div>
);

export default Main;
