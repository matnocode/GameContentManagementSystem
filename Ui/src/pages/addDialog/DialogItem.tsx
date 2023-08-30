import { FC, useState } from "react";
import { Form, FormControl, FormLabel, FormSelect } from "react-bootstrap";

import Button from "../../common/Button";
import CustomModal from "../../common/CustomModal";
import { Dialog } from "../../interfaces/dialog";

interface Props {
  dialog: Dialog;
  handleDeleteClick: () => void;
}

const DialogItem: FC<Props> = ({ dialog, handleDeleteClick }) => {
  const [show, setShow] = useState(false);
  const [isFile, setIsFile] = useState(true);
  let a = dialog;

  return (
    <>
      <div>
        <div className="border-top my-3" />
        <div className="d-flex justify-content-between ">
          <div className="text-success">Dialog</div>
          <div
            style={{ cursor: "pointer" }}
            className="btn btn-close py-2"
            onClick={() => setShow(true)}
          ></div>
        </div>
        <div className="border d-flex flex-column gap-2 rounded p-2">
          <div>
            <FormLabel>Select Speaker</FormLabel>
            {/* get characters */}
            <FormSelect>
              <option>Player</option>
              <option>Lux</option>
              <option>Sylas</option>
              <option>Tresh</option>
              <option>Orianna</option>
            </FormSelect>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center ">
              <FormLabel>Dialog text content</FormLabel>
              <Button
                className="my-2"
                onClick={() => setIsFile((isFile) => !isFile)}
              >
                Change input {isFile ? "📝" : "📁"}
              </Button>
            </div>
            <FormControl type={isFile ? "file" : "text"} />
          </div>
        </div>
      </div>
      {show && (
        <CustomModal
          handleClose={() => setShow(false)}
          handleConfirm={handleDeleteClick}
        >
          <div>Are you sure you want to delete this dialog?</div>
        </CustomModal>
      )}
    </>
  );
};

export default DialogItem;
