import { FC } from "react";
import type { TInput } from "../../../types";
import classNames from "classnames";
import { ReactComponent as ErrorIcon } from "../../../assets/img/error.svg";
import styles from "./Input.scss";

const cn = classNames.bind(styles);

const Input: FC<TInput> = ({ className, placeholder, ...args }) => {
  const { isDarkTheme, isError, errorMessage } = args;
  return (
    <>
      <input
        className={cn("input", className, {
          input_dark: isDarkTheme,
          input_error: isError,
          input_dark_error: isDarkTheme && isError,
        })}
        placeholder={placeholder}
      />
      {isError ? (
        <div className="input__error">
          <ErrorIcon />
          <p>{errorMessage}</p>
        </div>
      ) : null}
    </>
  );
};

export default Input;
