import React, { useContext } from "react";
import { ReducerContext, setOperator } from "../../context/reducer-context";
import styles from "./styles.module.css";

const OperatorSelector = ({ operators }) => {
  const [{ operator }, dispatch] = useContext(ReducerContext);
  const onClick = e => {
    dispatch(setOperator(e.target.value));
  };
  return (
    <div className={styles["operator-selector"]}>
      {Object.keys(operators).map(key => (
        <button
          onClick={onClick}
          key={key}
          value={key}
          className={key === operator ? styles["active"] : ""}
        >
          {operators[key]}
        </button>
      ))}
    </div>
  );
};

export default OperatorSelector;
