import React, { useState } from "react";
import { ToastContext } from "../../context/toast-context";

const Toast = ({ message, type = "success" }) => <div>{message}</div>;

const ToastManager = ({ children }) => {
  const [lastId, setLastId] = useState(1);
  const [toasts, setToasts] = useState([]);
  const addToast = ({ type, message }) => {
    setLastId(id => id + 1);
    setToasts(toasts => [...toasts, { id: lastId + 1, type, message }]);
    setTimeout(() => setToasts(toasts => toasts.slice(1)), 3000);
  };
  return (
    <ToastContext.Provider value={addToast}>
      {toasts.length ? (
        <div style={{ position: "absolute", top: 50, right: 400 }}>
          {toasts.map(toast => (
            <Toast key={toast.id} type={toast.type} message={toast.message} />
          ))}
        </div>
      ) : null}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastManager;
