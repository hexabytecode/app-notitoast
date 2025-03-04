import { CheckCircle, Info, AlertTriangle, XCircle } from "lucide-react";

export const generateId = () => Date.now();

export const getPositionClass = (vertical, horizontal) => {
  const verticalClass = vertical === "top" ? "top-4" : "bottom-4";
  const horizontalClass =
    horizontal === "left"
      ? "left-4"
      : horizontal === "right"
      ? "right-4"
      : "left-1/2 transform -translate-x-1/2";

  return `${verticalClass} ${horizontalClass}`;
};

export const getVariantClass = (variant) => {
  switch (variant) {
    case "success":
      return "border-green-500 text-green-700 bg-green-100";
    case "failure":
      return "border-red-500 text-red-700 bg-red-100";
    case "warning":
      return "border-yellow-500 text-yellow-700 bg-yellow-100";
    case "info":
      return "border-blue-500 text-blue-700 bg-blue-100";
    default:
      return "border-gray-500 text-gray-700 bg-gray-100";
  }
};

export const getVariantIcon = (variant) => {
  switch (variant) {
    case "success":
      return <CheckCircle className="text-green-500" />;
    case "failure":
      return <XCircle className="text-red-500" />;
    case "warning":
      return <AlertTriangle className="text-yellow-500" />;
    case "info":
      return <Info className="text-blue-500" />;
    default:
      return null;
  }
};

export const getAnimation = (position) => {
  return position.vertical === "top"
    ? {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
      };
};
