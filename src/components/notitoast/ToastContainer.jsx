import Toast from "./Toast";

const ToastContainer = ({ toasts, removeToast }) => (
  <div className="fixed top-4 right-4 space-y-2">
    {toasts.map((toast) => (
      <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
    ))}
  </div>
);

export default ToastContainer;
