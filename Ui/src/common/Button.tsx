import { ButtonHTMLAttributes, FC } from "react";

import { Link } from "react-router-dom";
import classNames from "classnames";

type buttonType = "default" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  buttonType?: buttonType;
}

const Button: FC<Props> = (props) => {
  return (
    <>
      {!props.to ? (
        <button
          type="button"
          onSubmit={() => {}}
          {...props}
          className={classNames(
            `btn`,
            props.className,
            !!props.buttonType && props.buttonType == "danger"
              ? "btn-outline-danger"
              : "btn-outline-dark"
          )}
        >
          {props.children}
        </button>
      ) : (
        <Link className="btn btn-outline-dark" to={props.to}>
          {props.children}
        </Link>
      )}
    </>
  );
};

export default Button;
