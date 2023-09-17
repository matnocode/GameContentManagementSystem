import { FC, useEffect, useState } from "react";
import {
  FailedRequest,
  LoadingRequest,
  SuccessUpdate,
} from "../../api/character";
import { Form, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { addEditStoryChapter, getStoryChapter } from "../../api/storyChapter";

import Button from "../../common/Button";
import Loader from "../../common/Loader";
import { StoryChapter } from "../../interfaces/storyChapter";
import _ from "lodash";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const AddEditStoryChapter: FC = () => {
  const { id } = useParams();

  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { data, isLoading, isError, remove } = useQuery<StoryChapter>(
    "getStoryChapter",
    () => getStoryChapter(Number(id)),
    {
      refetchOnWindowFocus: false,
      enabled: !_.isNaN(Number(id)) && _.isNumber(Number(id)),
    }
  );

  useEffect(() => {
    if (data !== undefined) {
      setTitle(data?.title ?? "");
      setContent(data?.content);
      setSummary(data?.summary);
    }
  }, [data]);

  useEffect(() => () => remove(), []);

  const handleAddEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(
      addEditStoryChapter({
        title: title,
        summary: summary,
        id: data?.id ?? undefined,
        content: content,
      } as StoryChapter),
      {
        loading: LoadingRequest,
        success: SuccessUpdate,
        error: FailedRequest,
      }
    );
  };

  return (
    <div className="py-3">
      <Button to="/storyChapters">⬅ Back</Button>
      <div className="h3 text-center">
        {!data ? "Add new" : "Edit"} Story chapter
      </div>
      {!isLoading ? (
        <Form
          className="d-flex flex-column gap-3 w-100 m-auto"
          onSubmit={handleAddEdit}
        >
          <Button className="my-3 w-50 mx-auto " type="submit">
            Save ✔️
          </Button>
          <div className="container-fluid ">
            <FormLabel>Title</FormLabel>
            <FormControl
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="row container-fluid ">
            <div className="col-12 col-lg-6">
              <FormLabel>Summary</FormLabel>
              <FormControl
                value={summary ?? ""}
                as="textarea"
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className="col-12 col-lg-6">
              <FormLabel>Content</FormLabel>
              <FormControl
                value={content ?? ""}
                as="textarea"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
        </Form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AddEditStoryChapter;
