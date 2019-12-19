import React, { useContext, useRef } from "react";
import { ReducerContext } from "../../context/reducer-context";
import { toNumber } from "../../utils";
import { ToastContext } from "../../context/toast-context";

const BasicInput = ({ type, onChange }) => {
  const [state, dispatch] = useContext(ReducerContext);
  const { activeInputs } = state;
  const value = state[type];
  const readOnly = !activeInputs.includes(type);
  const inputRef = useRef(null);
  const addToast = useContext(ToastContext);
  const handleChange = e => {
    const value = toNumber(e.target.value);
    dispatch(onChange(value));
  };
  const onCLick = e => {
    if (!readOnly) return;
    inputRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    addToast({ message: "Значение скопировано!" });
  };
  return (
    <input
      ref={inputRef}
      value={value}
      readOnly={readOnly}
      style={readOnly ? { cursor: "pointer" } : {}}
      onChange={handleChange}
      onClick={onCLick}
    ></input>
  );
};

export default BasicInput;
