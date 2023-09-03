import { FC } from "react";
import _ from "lodash";
import classNames from "classnames";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const CharacterImage: FC<Props> = (props) => {
  return (
    <img
      {...props}
      src={
        props.src ??
        "https://i.pinimg.com/736x/c5/ea/88/c5ea885c9cf5f7f8fc9b3fb73dcffa42.jpg"
      }
      style={{ width: "50px" }}
      className={classNames("img-thumbnail", props.className)}
    />
  );
};

export default CharacterImage;
