import React, { useContext } from "react";
import {
  ReducerContext,
  setOperator,
  operators
} from "../../context/reducer-context";

const OperatorSelector = () => {
  const [{ operator }, dispatch] = useContext(ReducerContext);
  const onClick = e => {
    dispatch(setOperator(e.target.value));
  };
  return (
    <div>
      {Object.keys(operators).map(key => (
        <button
          onClick={onClick}
          key={key}
          value={key}
          style={key === operator ? { border: "1px solid red" } : {}}
        >
          {operators[key]}
        </button>
      ))}
    </div>
  );
};

export default OperatorSelector;
