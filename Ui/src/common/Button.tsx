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
          {...props}
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
        <Link
          className={classNames("btn btn-outline-dark", props.className)}
          to={props.to}
        >
          {props.children}
        </Link>
      )}
    </>
  );
};

export default Button;
