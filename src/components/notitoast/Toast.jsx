import { X } from "lucide-react";
import { motion } from "framer-motion";
import { getAnimation, getVariantClass, getVariantIcon } from "./toastUtils";

const Toast = ({ variant, message, position, onClose }) => {
  return (
    <motion.div
      layout
      className={`z-[1000] flex items-center justify-between gap-4 rounded-lg shadow-lg border-l-4 ${getVariantClass(
        variant
      )} p-4`}
      {...getAnimation(position)}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        {getVariantIcon(variant)}
        <span>{message}</span>
      </div>
      <button onClick={onClose} className="text-xl">
        <X />
      </button>
    </motion.div>
  );
};

export default Toast;
