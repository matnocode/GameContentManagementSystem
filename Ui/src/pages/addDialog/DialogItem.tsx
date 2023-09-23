import { FC, useEffect, useState } from "react";
import { FormControl, FormSelect } from "react-bootstrap";

import Button from "../../common/Button";
import { Character } from "../../interfaces/character";
import CharacterImage from "./components/CharacterImage";
import CustomModal from "../../common/CustomModal";
import { Dialog } from "../../interfaces/dialog";

interface Props {
  dialog: Dialog;
  characters: Character[];
  index: number;
  handleDeleteClick: () => void;
  handleDialogValuesChange: (dialog: Dialog, index: number) => void;
}

const DialogItem: FC<Props> = ({
  dialog,
  characters,
  handleDeleteClick,
  handleDialogValuesChange,
  index,
}) => {
  const [show, setShow] = useState(false);
  const [isFile, setIsFile] = useState(true);

  useEffect(() => {
    handleSpeakerSelect(characters?.[0]?.id);
  }, []);

  const handleSpeakerSelect = (id: number) => {
    let character = characters.find((x) => x.id === id);
    handleDialogValuesChange(
      {
        content: "",
        speaker: character,
      },
      index
    );
  };

  return (
    <>
      <div className="pb-5 mx-lg-5">
        <div className="my-1">
          <div className="btn btn-close" onClick={() => setShow(true)} />
        </div>
        <div
          className="border d-flex flex-column gap-2 rounded p-2"
          style={{ background: "#F4F3F3" }}
        >
          <div>
            {/* <FormLabel>Select Speaker</FormLabel> */}
            <div className="d-flex gap-2">
              <CharacterImage src={dialog.speaker?.iconUrl} />
              <FormSelect
                onChange={(e) =>
                  handleSpeakerSelect(Number(e.currentTarget.value))
                }
              >
                {characters?.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </FormSelect>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center ">
              {/* <FormLabel>Text Content</FormLabel> */}
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
