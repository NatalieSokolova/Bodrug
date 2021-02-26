import { toast } from "react-toastify";

const notifyError = (message) =>
  toast.dark(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifySuccess = (message) =>
  toast.success(message, {
    hideProgressBar: true,
  });

const copyrightError = () => {
  notifyError("Sorry, all the images are copyright");
};

const setPhotoIds = (id, array, method) => {
  const photoIds = array.concat(id);
  console.log("photoIds: ", photoIds);
  return method(photoIds);
};

export { notifyError, notifySuccess, copyrightError, setPhotoIds };
