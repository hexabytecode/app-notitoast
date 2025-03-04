"use client";

import { createContext, useState } from "react";
import ToastContainer from "./ToastContainer";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Date.now();
    setToasts((prevToasts) => [{ id, ...toast }, ...prevToasts]);

    if (toast.duration) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration * 1000);
    }
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};
