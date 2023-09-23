import Button from "./Button";
import { FC } from "react";
import { Modal } from "react-bootstrap";

interface Props extends React.PropsWithChildren {
  handleClose: () => void;
  handleConfirm?: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

const CustomModal: FC<Props> = ({
  cancelButtonText,
  confirmButtonText,
  handleClose,
  handleConfirm,
  children,
}) => {
  return (
    <Modal show centered>
      <Modal.Header>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      {children && <Modal.Body>{children}</Modal.Body>}
      <Modal.Footer>
        <Button onClick={handleClose}>{cancelButtonText ?? "Cancel"}</Button>
        <Button
          buttonType="danger"
          onClick={() => {
            handleConfirm?.();
            handleClose();
          }}
        >
          {confirmButtonText ?? "Confirm"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
