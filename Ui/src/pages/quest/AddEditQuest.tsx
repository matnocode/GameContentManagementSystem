import { FC, useEffect, useState } from "react";
import { Form, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { Quest, QuestType } from "../../interfaces/quest";
import { addEditQuest, getQuest } from "../../api/quest";

import Button from "../../common/Button";
import Loader from "../../common/Loader";
import _ from "lodash";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const AddEditQuest: FC = () => {
  const [questType, setQuestType] = useState<number>();
  const [name, setName] = useState("");

  const { id } = useParams();
  const { data, isLoading, remove } = useQuery<Quest>(
    "getQuest",
    () => getQuest(Number(id) ?? -1),
    { refetchOnReconnect: false, refetchOnWindowFocus: false }
  );
  console.log(questType);

  const handleAddEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // toast.promise(AddCharacter({ name: name, iconUrl: src } as Character), {
    //   loading: LoadingRequest,
    //   success: SuccessUpdate,
    //   error: FailedRequest,
    // });
    await addEditQuest({
      name: name,
      questType: questType,
      id: data?.id ?? undefined,
    } as Quest);
  };

  useEffect(() => {
    if (data !== undefined) {
      setQuestType(data?.questType ?? "FirstQuest");
      setName(data?.name ?? "");
    }
  }, [data]);

  useEffect(() => () => remove(), []);

  return (
    <div className="py-3">
      <Button to="/quests">⬅ Back</Button>
      <div className="h3 text-center">Add new Quest</div>
      {!isLoading ? (
        <Form
          className="d-flex flex-column gap-3 w-50 m-auto"
          onSubmit={handleAddEdit}
        >
          <Button className="my-3" type="submit">
            Save ✔️
          </Button>
          <div>
            <FormLabel>Name</FormLabel>
            <FormControl
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <FormLabel>QuestType</FormLabel>
            <FormSelect
              value={questType}
              onChange={(e) => setQuestType(Number(e.target.value))}
            >
              <option value={QuestType.FirstQuest} label="FirstQuest" />
              <option value={QuestType.SecondQuest} label="SecondQuest" />
              <option value={QuestType.ThirdQuest} label="ThirdQuest" />
            </FormSelect>
          </div>
        </Form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AddEditQuest;
