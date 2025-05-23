import { FC, useState } from "react";
import { Form, FormLabel, FormSelect } from "react-bootstrap";

import Button from "../../common/Button";
import { Character } from "../../interfaces/character";
import { Dialog } from "../../interfaces/dialog";
import DialogItem from "./DialogItem";
import { Quest } from "../../interfaces/quest";
import _ from "lodash";
import { getCharacters } from "../../api/character";
import { getQuests } from "../../api/quest";
import { useQuery } from "react-query";

const AddDialogPage: FC = () => {
  const data = [] as Dialog[];
  const [dialogs, setDialogs] = useState<Dialog[]>(data);

  const { data: characters } = useQuery("getCharacters", () => getCharacters());
  const { data: quests } = useQuery<Quest[]>("getQuests", () => getQuests());

  const handleDeleteClick = (index: number) => {
    setDialogs(dialogs.filter((_, i) => i != index));
  };

  const handleDialogValuesChange = (dialog: Dialog, index: number) =>
    setDialogs(dialogs.map((prev, i) => (i === index ? dialog : prev)));

  return (
    <div>
      <Button to="/dialogs" className="my-2">
        ⬅ Back
      </Button>
      <Form className="d-flex flex-column gap-3 p-2">
        <div>
          <FormLabel className="fw-bold">Select Quest Type</FormLabel>
          <FormSelect>
            {quests?.map((q) => (
              <option value={q.id}>{q.title}</option>
            ))}
          </FormSelect>
        </div>
        <div className="d-flex justify-content-between sticky-top bg-white p-2 shadow-sm border">
          <Button
            onClick={() =>
              setDialogs([
                ...dialogs,
                {
                  content: "",
                  speaker: { name: "", iconUrl: undefined } as Character,
                },
              ])
            }
          >
            ➕ Add chat
          </Button>
          <Button disabled={_.isEqual(data, dialogs)}>Save ✔️</Button>
        </div>

        <div className="d-flex flex-column gap-2">
          {dialogs?.map((x, i) => (
            <DialogItem
              key={i}
              dialog={x}
              characters={characters}
              handleDeleteClick={() => handleDeleteClick(i)}
              handleDialogValuesChange={handleDialogValuesChange}
              index={i}
            />
          ))}
        </div>
      </Form>
    </div>
  );
};
export default AddDialogPage;
