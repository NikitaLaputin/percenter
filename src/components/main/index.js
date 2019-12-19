import React from "react";
import NumberInput from "../inputs/number-input";
import PercentInput from "../inputs/percent-input";
import ResultInput from "../inputs/result-input";
import styles from "./styles.module.css";
import NumbersOperatorSelector from "../inputs/numbers-operators-selector";
import PercentageOperatorSelector from "../inputs/percentage-operator-selector";

const Main = () => (
  <div className={styles["main-container"]}>
    <div className={styles["content"]}>
      <PercentInput />
      <PercentageOperatorSelector />
      <NumberInput />
      <NumbersOperatorSelector />
      <ResultInput />
    </div>
  </div>
);

export default Main;
