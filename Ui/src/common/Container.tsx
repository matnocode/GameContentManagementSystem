import { FC } from "react";
import { Outlet } from "react-router-dom";

const Container: FC = () => {
  return (
    <div className="container mt-3 mb-5 bg-light rounded-3">
      <Outlet />
    </div>
  );
};

export default Container;
