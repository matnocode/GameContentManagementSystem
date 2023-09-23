import Button from "../../common/Button";
import { FC } from "react";
import { Quest } from "../../interfaces/quest";
import { Table } from "react-bootstrap";
import { getQuests } from "../../api/quest";
import { useQuery } from "react-query";

const DialogListPage: FC = () => {
  const { data } = useQuery<Quest[]>("aaaa", () => getQuests());

  return (
    <div className="py-2">
      <Button to="/">⬅ Back</Button>
      <div className="d-flex justify-content-end pb-2">
        <Button to={"/addDialog"}>➕ Add new Dialog</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>Quest Type</div>
                <div>^</div>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>First Speaker</div>
                <div>^</div>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between align-items-center py-1">
                <div>Enter Conditions</div>
                <div>^</div>
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
          {data &&
            data.map((x) => (
              <tr>
                {/* <td>{x.}</td>
                <td>{x.name}</td> */}
                <td></td>
                <td className="d-flex justify-content-between ">
                  <Button to="/addDialog/x.id">✏️</Button>
                  <div className="btn btn-close py-2" />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DialogListPage;
