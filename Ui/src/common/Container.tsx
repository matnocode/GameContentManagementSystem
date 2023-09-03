import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Container: FC = () => {
  return (
    <div className="container mt-3 mb-5 bg-light rounded-3">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Container;
