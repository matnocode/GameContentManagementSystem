import { FC, useState } from "react";
import { Form, FormLabel, FormSelect, FormText } from "react-bootstrap";

import Button from "../../common/Button";
import { Dialog } from "../../interfaces/dialog";
import DialogItem from "./DialogItem";
import _ from "lodash";

const AddDialogPage: FC = () => {
  const data = [] as Dialog[];
  const [dialogs, setDialogs] = useState<Dialog[]>(data);

  const handleDeleteClick = (index: number) => {
    setDialogs(dialogs.filter((_, i) => i != index));
  };

  return (
    <div>
      <Button to="/">⬅ Back</Button>
      <Form className="d-flex flex-column gap-3 p-2">
        <div className="">
          <FormLabel className="fw-bold">Select Quest Type</FormLabel>
          <FormSelect>
            <option>No Quest</option>
            <option>Quest 1</option>
            <option>Quest 2</option>
            <option>Quest 3</option>
          </FormSelect>
        </div>
        <div className="d-flex justify-content-between ">
          <Button
            onClick={() =>
              setDialogs([...dialogs, { content: "", sprite: "" }])
            }
          >
            ➕ Add new Dialog
          </Button>
          <Button disabled={_.isEqual(data, dialogs)}>Save ✔️</Button>
        </div>
        <div className="d-flex flex-column gap-2">
          {dialogs?.map((x, i) => (
            <DialogItem
              key={i}
              dialog={x}
              handleDeleteClick={() => handleDeleteClick(i)}
            />
          ))}
        </div>
      </Form>
    </div>
  );
};
export default AddDialogPage;
