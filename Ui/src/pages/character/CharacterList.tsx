import { FC, useMemo, useState } from "react";
import { deleteCharacter, getCharacters } from "../../api/character";

import Button from "../../common/Button";
import { Character } from "../../interfaces/character";
import CharacterImage from "../addDialog/components/CharacterImage";
import CustomModal from "../../common/CustomModal";
import Loader from "../../common/Loader";
import NoData from "../../common/NoData";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";

const CharacterList: FC = () => {
  const { data, isLoading, refetch } = useQuery("characters", () =>
    getCharacters()
  );
  const characters = useMemo(() => (data ?? []) as Character[], [data]);
  const [character, setCharacter] = useState<Character>();

  const handleDelete = async () => {
    await deleteCharacter(character?.id ?? -1);
    refetch();
  };

  return (
    <div className="py-2">
      <Button to="/">⬅ Back</Button>
      <div className="d-flex justify-content-end pb-2">
        <Button to={"/addCharacter"}>➕ Add new Character</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>Name</div>
                <div>^</div>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>Icon</div>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>Actions</div>
                <div>^</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {characters?.map((x) => (
            <tr>
              <td>{x.name ?? "-"}</td>
              <td>
                <CharacterImage src={x.iconUrl ?? "-"} />
              </td>
              <td className="d-flex justify-content-between ">
                <Button to={`/addCharacter/${x.id}`}>✏️</Button>
                <div
                  className="btn btn-close py-2"
                  onClick={() => setCharacter(x)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isLoading && <Loader />}
      {characters?.length === 0 && !isLoading && <NoData />}
      {character && (
        <CustomModal
          handleClose={() => setCharacter(undefined)}
          handleConfirm={handleDelete}
        >
          Are you sure you want to delete{" "}
          <span className="bg-black text-white "> {character.name ?? "-"}</span>{" "}
          ?
        </CustomModal>
      )}
    </div>
  );
};

export default CharacterList;
