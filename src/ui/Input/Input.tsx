import { FC } from "react";
import type { TInput } from "../../types";
import classNames from "classnames";
import { ReactComponent as ErrorIcon } from "../../assets/img/error.svg";
import styles from "./Input.scss";
const cn = classNames.bind(styles);

const Input: FC<TInput> = ({ className, ...other }) => {
  return (
    <>
      <input
        className={cn("input", className, {
          input_dark: other.isDarkTheme,
          input_error: other.isError,
          input_dark_error: other.isDarkTheme && other.isError,
        })}
        placeholder={other.placeholder}
      />
      {other.isError ? (
        <div className="input__error">
          <ErrorIcon />
          <p>{other.errorMessage}</p>
        </div>
      ) : null}
    </>
  );
};

export default Input;
