"use client";

import { createContext, useState } from "react";
import ToastContainer from "./ToastContainer";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [maxNotifications, setMaxNotifications] = useState(5);

  const addToast = (toast) => {
    const id = Date.now();
    setToasts((prevToasts) => {
      const updatedToasts = [{ id, ...toast }, ...prevToasts];
      return updatedToasts.slice(0, maxNotifications);
    });

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
    <ToastContext.Provider
      value={{ addToast, removeToast, setMaxNotifications }}
    >
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};
