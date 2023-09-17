import { FC, useState } from "react";
import {
  FailedRequest,
  LoadingRequest,
  SuccessRemove,
} from "../../api/character";
import { deleteStoryChapter, getStoryChapters } from "../../api/storyChapter";

import Button from "../../common/Button";
import CustomModal from "../../common/CustomModal";
import Loader from "../../common/Loader";
import NoData from "../../common/NoData";
import { StoryChapter } from "../../interfaces/storyChapter";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const StoryChapters: FC = () => {
  const { data, isLoading, isError, refetch } = useQuery<StoryChapter[]>(
    "getStoryChapters",
    () => getStoryChapters()
  );

  const [storyChapter, setStoryChapter] = useState<StoryChapter>();

  const handleDelete = async () =>
    toast.promise(deleteStoryChapter(storyChapter?.id ?? -1), {
      error: FailedRequest,
      loading: LoadingRequest,
      success: () => {
        refetch();
        return SuccessRemove;
      },
    });

  return (
    <div className="py-2">
      <Button to="/">⬅ Back</Button>
      <div className="d-flex justify-content-end pb-2">
        <Button to={"/addEditStoryChapter"}>➕ Add new Story Chapter</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div>Title</div>
            </th>
            <th>
              <div>Summary</div>
            </th>
            <th>
              <div>Content</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((x, i) => (
            <tr key={i}>
              <td>{x.title ?? "-"}</td>
              <td>{x.summary?.substring(0, 50) ?? "-"}</td>
              <td>{x.content?.substring(0, 50) ?? "-"}</td>
              <td className="d-flex justify-content-between ">
                <Button to={`/addEditStoryChapter/${x.id}`}>✏️</Button>
                <div
                  className="btn btn-close py-2"
                  onClick={() => setStoryChapter(x)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isLoading && <Loader />}
      {((data?.length === 0 && !isLoading) || isError) && <NoData />}
      {storyChapter && (
        <CustomModal
          handleClose={() => setStoryChapter(undefined)}
          handleConfirm={handleDelete}
        >
          Are you sure you want to delete{" "}
          <span className="bg-black text-white ">
            {storyChapter.title ?? "-"}
          </span>{" "}
          ?
        </CustomModal>
      )}
    </div>
  );
};

export default StoryChapters;
