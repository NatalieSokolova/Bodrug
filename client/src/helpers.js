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

const setRecordIds = (id, array, method) => {
  const recordIds = array.concat(id);
  console.log("recordIds: ", recordIds);
  return method(recordIds);
};

export { notifyError, notifySuccess, copyrightError, setRecordIds };
