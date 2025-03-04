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
      return "bg-green-500 text-white";
    case "failure":
      return "bg-red-500 text-white";
    case "warning":
      return "bg-yellow-500 text-black";
    case "info":
      return "bg-blue-500 text-white";
    default:
      return "bg-gray-500 text-white";
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
