import React, { useContext } from "react";
import {
  PercenterContext,
  setOperator,
  operators
} from "../../context/reducer";

const OperatorSelector = () => {
  const [{ operator }, dispatch] = useContext(PercenterContext);
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
