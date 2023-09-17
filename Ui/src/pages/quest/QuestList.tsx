import { FC, useState } from "react";
import { Quest, QuestType } from "../../interfaces/quest";

import Button from "../../common/Button";
import CustomModal from "../../common/CustomModal";
import Loader from "../../common/Loader";
import NoData from "../../common/NoData";
import { Table } from "react-bootstrap";
import { deleteCharacter } from "../../api/character";
import { getQuests } from "../../api/quest";
import { useQuery } from "react-query";

const QuestList: FC = () => {
  const { data, isLoading, isError, refetch } = useQuery<Quest[]>(
    "quests",
    () => getQuests()
  );
  const [quest, setQuest] = useState<Quest>();

  const handleDelete = async () => {
    await deleteCharacter(quest?.id ?? -1);
    refetch();
  };

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
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>QuestType</div>
                <div>^</div>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>Name</div>
                <div>^</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((x) => (
            <tr>
              <td>{QuestType[x.questType] ?? "-"}</td>
              <td>{x.name ?? "-"}</td>
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
          <span className="bg-black text-white "> {quest.name ?? "-"}</span> ?
        </CustomModal>
      )}
    </div>
  );
};

export default QuestList;
