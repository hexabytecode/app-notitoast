import Toast from "./Toast";
import { getPositionClass } from "./toastUtils";

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
