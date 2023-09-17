import { FC, useEffect, useState } from "react";
import {
  FailedRequest,
  LoadingRequest,
  SuccessUpdate,
} from "../../api/character";
import { Form, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { addEditQuest, getQuest } from "../../api/quest";

import Button from "../../common/Button";
import Loader from "../../common/Loader";
import { Quest } from "../../interfaces/quest";
import { StoryChapter } from "../../interfaces/storyChapter";
import _ from "lodash";
import { getStoryChapters } from "../../api/storyChapter";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const AddEditQuest: FC = () => {
  const [title, setTitle] = useState("");
  const [storyChapter, setStoryChapter] = useState<number>();

  const { id } = useParams();
  const { data, isLoading, remove } = useQuery<Quest>(
    "getQuest",
    () => getQuest(Number(id)),
    {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !_.isNaN(id) && _.isNumber(id),
    }
  );

  const { data: storyChapters } = useQuery<StoryChapter[]>(
    "getStoryChapters",
    () => getStoryChapters()
  );

  const handleAddEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(
      addEditQuest({
        id: data?.id ?? undefined,
        storyChapter: {} as StoryChapter,
        title: title,
      } as Quest),
      {
        loading: LoadingRequest,
        success: SuccessUpdate,
        error: FailedRequest,
      }
    );
  };

  useEffect(() => {
    if (data !== undefined) {
      setTitle(data?.title ?? "");
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
            <FormLabel>Select Story Chapter</FormLabel>
            <FormSelect
              onChange={(e) => setStoryChapter(Number(e.currentTarget.value))}
            >
              {storyChapters?.map((sc) => (
                <option value={sc.id}>{sc.title}</option>
              ))}
            </FormSelect>
          </div>
          <div>
            <FormLabel>Quest Title</FormLabel>
            <FormControl
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </Form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AddEditQuest;
