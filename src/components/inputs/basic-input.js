import React, { useContext } from "react";
import { PercenterContext } from "../../context/reducer";
import { toNumber } from "../../utils";

const BasicInput = ({ type, onChange }) => {
  const [state, dispatch] = useContext(PercenterContext);
  const { activeInputs } = state;
  const value = state[type];
  const readOnly = !activeInputs.includes(type);
  const handleChange = e => {
    const value = toNumber(e.target.value);
    dispatch(onChange(value));
  };
  return (
    <input
      value={value}
      readOnly={readOnly}
      style={readOnly ? { cursor: "pointer" } : {}}
      onChange={handleChange}
    ></input>
  );
};

export default BasicInput;
