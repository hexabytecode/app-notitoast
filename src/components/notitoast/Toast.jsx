import { X } from "lucide-react";

const Toast = ({ variant, message, onClose }) => (
  <div className={`toast ${variant}`}>
    <span>{message}</span>
    <button onClick={onClose}>
      <X />
    </button>
  </div>
);

export default Toast;
