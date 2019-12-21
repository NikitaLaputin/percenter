import React, { useState, useCallback } from "react";
import { ToastContext } from "../../context/toast-context";
import styles from "./styles.module.css";

const Toast = ({ message, type = "success", fading }) => (
  <div
    className={
      fading ? `${styles["toast"]} ${styles["toast__fading"]}` : styles["toast"]
    }
  >
    {message}
  </div>
);

const ToastManager = ({ children }) => {
  const [lastId, setLastId] = useState(1);
  const [toasts, setToasts] = useState([]);
  const setFading = useCallback(() => {
    setTimeout(
      () =>
        setToasts(toasts =>
          toasts.map((toast, i) => (i ? toast : { ...toast, fading: true }))
        ),
      2500
    );
    setTimeout(() => setToasts(toasts => toasts.slice(1)), 2700);
  }, []);
  const addToast = ({ type, message }) => {
    setLastId(id => id + 1);
    setToasts(toasts => [...toasts, { id: lastId + 1, type, message }]);
    setFading();
  };
  return (
    <ToastContext.Provider value={addToast}>
      {toasts.length ? (
        <div className={styles["toast-container"]}>
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              type={toast.type}
              message={toast.message}
              fading={toast.fading}
            />
          ))}
        </div>
      ) : null}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastManager;
