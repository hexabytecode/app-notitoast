import { X } from "lucide-react";
import { motion } from "framer-motion";
import { getAnimation, getVariantClass, getVariantIcon } from "./toastUtils";
import { Button } from "../ui/button";

const Toast = ({ variant, message, position, onClose, action }) => {
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
      <div className="flex items-center gap-2">
        {action && (
          <Button onClick={action.callback} variant="outline">
            {action.label}
          </Button>
        )}
        <Button onClick={onClose} variant="ghost" className="text-xl">
          <X />
        </Button>
      </div>
    </motion.div>
  );
};

export default Toast;
