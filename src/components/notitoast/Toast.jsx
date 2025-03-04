import { X } from "lucide-react";
import { motion } from "framer-motion";
import { getAnimation, getVariantClass } from "./toastUtils";

const Toast = ({ variant, message, position, onClose }) => (
  <motion.div
    layout
    className={`z-[1000] ${getVariantClass(
      variant
    )} p-4 rounded-lg shadow-lg flex items-center justify-between gap-4`}
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
