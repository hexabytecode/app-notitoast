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
