import Button from "../common/Button";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div>
      <h3 className="text-center">Game Content Management System</h3>
      <hr />
      <div className="d-flex flex-column gap-3">
        <Button to="addQuest">Manage Quests 📍</Button>
        <Button to="addQuest">Manage Characters ‍👤</Button>
        <Button to="addDialog">Manage Dialogs 👄</Button>
      </div>
    </div>
  );
};

export default MainPage;
