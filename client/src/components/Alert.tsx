import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { removeAlert } from "../utils/Alert";

export const AlertBox = () => {
  return (
    <Alert
      id="alert"
      color={"failure"}
      icon={HiInformationCircle}
      onDismiss={removeAlert}
      className="absolute left-0 bottom-0 z-10 rounded-none  border"
    >
      <span className="font-medium" id="alert-title">
        Info alert!
      </span>
      <span className="mx-1"></span>
      <span id="alert-description">This is a test alert!</span>
      <span className="me-5"></span>
    </Alert>
  );
};
