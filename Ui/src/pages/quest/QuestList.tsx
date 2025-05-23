import { FC, useState } from "react";
import {
  FailedRequest,
  LoadingRequest,
  SuccessRemove,
  deleteCharacter,
} from "../../api/character";

import Button from "../../common/Button";
import CustomModal from "../../common/CustomModal";
import Loader from "../../common/Loader";
import NoData from "../../common/NoData";
import { Quest } from "../../interfaces/quest";
import { Table } from "react-bootstrap";
import { getQuests } from "../../api/quest";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const QuestList: FC = () => {
  const { data, isLoading, isError, refetch } = useQuery<Quest[]>(
    "quests",
    () => getQuests()
  );
  const [quest, setQuest] = useState<Quest>();

  const handleDelete = async () =>
    toast.promise(deleteCharacter(quest?.id ?? -1), {
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
        <Button to={"/addQuest"}>➕ Add new Quest</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div>Title</div>
            </th>
            <th>
              <div>Story Chapter</div>
            </th>
            <th>
              <div>Actions</div>
            </th>
            <th>
              <div>Items</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((x, i) => (
            <tr key={i}>
              <td>{x.storyChapter.title}</td>
              <td>{x.title}</td>
              <td className="d-flex justify-content-between ">
                <Button to={`/addQuest/${x.id}`}>✏️</Button>
                <div
                  className="btn btn-close py-2"
                  onClick={() => setQuest(x)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isLoading && <Loader />}
      {((data?.length === 0 && !isLoading) || isError) && <NoData />}
      {quest && (
        <CustomModal
          handleClose={() => setQuest(undefined)}
          handleConfirm={handleDelete}
        >
          Are you sure you want to delete{" "}
          <span className="bg-black text-white"> {quest.title ?? "-"}</span> ?
        </CustomModal>
      )}
    </div>
  );
};

export default QuestList;
