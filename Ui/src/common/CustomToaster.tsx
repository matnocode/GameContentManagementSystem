import { FC, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

import Button from "./Button";

const CustomToaster: FC = () => {
  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => setShowToast(!showToast);

  return (
    <>
      <Button onClick={toggleToast}>Show Toast</Button>
      <Toast className="abs" show={showToast} onClose={toggleToast}>
        <Toast.Header>
          <strong className="mr-auto">Toast Notification</strong>
        </Toast.Header>
        <Toast.Body>This is a sample toast notification.</Toast.Body>
      </Toast>
    </>
  );
};

export default CustomToaster;
