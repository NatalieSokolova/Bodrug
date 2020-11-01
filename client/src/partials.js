import { ToastContainer, toast } from "react-toastify";

export const notifyError = (message) =>
  toast.dark(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const notifySuccess = (message) =>
  toast.success(message, {
    hideProgressBar: true,
  });

export const copyrightError = () => {
  notifyError("Sorry, all the images are copyright");
};
