import React, { useContext, useRef } from "react";
import { ReducerContext } from "../../context/reducer-context";
import { toNumber } from "../../utils";
import { ToastContext } from "../../context/toast-context";
import styles from "./styles.module.css";

const BasicInput = ({ type, onChange, postfix }) => {
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
    <div
      className={`${styles["input-container"]}
        ${!readOnly && styles["input-container__active"]}`}
    >
      <input
        ref={inputRef}
        value={value}
        readOnly={readOnly}
        onChange={handleChange}
        onClick={onCLick}
      ></input>
      {postfix && <label>{postfix}</label>}
    </div>
  );
};

export default BasicInput;
