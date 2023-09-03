import {
  AddCharacter,
  FailedRequest,
  LoadingRequest,
  SuccessUpdate,
} from "../../api/character";
import { FC, useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { toast, useToaster } from "react-hot-toast/headless";

import Button from "../../common/Button";
import { Character } from "../../interfaces/character";
import CharacterImage from "../addDialog/components/CharacterImage";
import { Toaster } from "react-hot-toast";
import _ from "lodash";

const AddEditCharacter: FC = () => {
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const { toasts } = useToaster();

  const handleAddEdit = () => {
    console.log(toasts);
    toast.promise(AddCharacter({ name: name, iconUrl: src } as Character), {
      loading: LoadingRequest,
      success: SuccessUpdate,
      error: FailedRequest,
    });
  };

  return (
    <div className="py-3">
      <Button to="/">⬅ Back</Button>
      <div className="h3 text-center ">Add new character</div>
      <Form className="d-flex flex-column gap-3 w-50 m-auto">
        <Button className="my-3" onClick={handleAddEdit}>
          Save ✔️
        </Button>
        <div>
          <FormLabel>Name</FormLabel>
          <FormControl type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <FormLabel>Icon Url</FormLabel>
          <div className="d-flex gap-2 ">
            <FormControl type="text" onChange={(e) => setSrc(e.target.value)} />
            <CharacterImage src={src} />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddEditCharacter;
