import { X } from "lucide-react";
import { motion } from "framer-motion";

const getAnimation = (position) => {
  return position.vertical === "top"
    ? {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
      };
};

const Toast = ({ variant, message, position, onClose }) => (
  <motion.div
    className={`toast ${variant} p-4 rounded-lg shadow-lg flex items-center justify-between gap-4`}
    {...getAnimation(position)}
    transition={{ duration: 0.3 }}
  >
    <span>{message}</span>
    <button onClick={onClose} className="text-xl">
      <X />
    </button>
  </motion.div>
);

export default Toast;
