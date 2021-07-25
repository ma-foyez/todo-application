import { toast } from "react-toastify";
const defaultPosition = toast.POSITION.BOTTOM_CENTER;

/**
 * show Toast
 *
 * Display toast
 *
 * @param {string} type message type, success/error
 * @param {string} msg toast message
 * @param {integer} autoClose auto close value in millisecond
 * @param {string} className toaster class name
 * @param {string} position toast position; ex-'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'
 */

export const showToast = ( type = "success", msg, autoClose = 2000, className = "primaryColor", position = defaultPosition ) => {
  if (type === "success") {
    toast.success(msg, {
      autoClose: autoClose === null ? 2000 : autoClose,
      className: className === null ? "primaryColor" : className,
      position: position,
    });
  } else if (type === "error") {
    toast.error(msg, {
      autoClose: autoClose === null ? 2000 : autoClose,
      className: className === null ? "dangerColor" : className,
      position: position,
    });
  }
};
