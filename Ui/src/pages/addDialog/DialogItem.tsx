import { FC, useState } from "react";
import { Form, FormControl, FormLabel, FormSelect } from "react-bootstrap";

import Button from "../../common/Button";
import CharacterImage from "./components/CharacterImage";
import CustomModal from "../../common/CustomModal";
import { Dialog } from "../../interfaces/dialog";

interface Props {
  dialog: Dialog;
  handleDeleteClick: () => void;
}

const DialogItem: FC<Props> = ({ dialog, handleDeleteClick }) => {
  const [show, setShow] = useState(false);
  const [isFile, setIsFile] = useState(true);

  return (
    <>
      <div>
        <div className="d-flex justify-content-end my-1">
          <div className="btn btn-close py-2" onClick={() => setShow(true)} />
        </div>
        <div className="border d-flex flex-column gap-2 rounded p-2">
          <div>
            <FormLabel>Select Speaker</FormLabel>
            {/* get characters */}
            <div className="d-flex gap-2">
              <CharacterImage src={dialog.speaker?.iconUrl} />
              <FormSelect>
                <option>Player</option>
                <option>Lux</option>
                <option>Sylas</option>
                <option>Tresh</option>
                <option>Orianna</option>
              </FormSelect>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center ">
              <FormLabel>Text Content</FormLabel>
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
