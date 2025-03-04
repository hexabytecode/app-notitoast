import Toast from "./Toast";

const getPositionClass = (vertical, horizontal) => {
  const verticalClass = vertical === "top" ? "top-4" : "bottom-4";
  const horizontalClass =
    horizontal === "left"
      ? "left-4"
      : horizontal === "right"
      ? "right-4"
      : "left-1/2 transform -translate-x-1/2";

  return `${verticalClass} ${horizontalClass}`;
};

const ToastContainer = ({ toasts, removeToast }) => {
  const groupedToasts = toasts.reduce((groups, toast) => {
    const positionKey = `${toast.position.vertical}-${toast.position.horizontal}`;
    if (!groups[positionKey]) groups[positionKey] = [];
    groups[positionKey].push(toast);
    return groups;
  }, {});

  return (
    <>
      {Object.entries(groupedToasts).map(([position, groupedToasts]) => {
        const [vertical, horizontal] = position.split("-");
        return (
          <div
            key={position}
            className={`fixed space-y-2 z-50 ${getPositionClass(
              vertical,
              horizontal
            )}`}
          >
            {groupedToasts.map((toast) => (
              <Toast
                key={toast.id}
                variant={toast.variant}
                message={toast.message}
                position={toast.position}
                onClose={() => removeToast(toast.id)}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default ToastContainer;
