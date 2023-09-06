import { FC } from "react";

export type ImageSize = "sm" | "md" | "lg";

const Loader: FC<{ size?: ImageSize }> = ({ size = "sm" }) => {
  return (
    <div className="w-100 d-flex justify-content-center py-3">
      <img
        src="src\assets\loader.gif"
        style={{
          width: size === "sm" ? "50px" : size === "md" ? "75px" : "100px",
        }}
      />
    </div>
  );
};

export default Loader;
