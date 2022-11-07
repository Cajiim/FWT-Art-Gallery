import { FC } from "react";
import type { TInput } from "../../types";
import classNames from "classnames";
import { ReactComponent as ErrorIcon } from "../../assets/img/error.svg";
import styles from "./Input.scss";
const cn = classNames.bind(styles);

const Input: FC<TInput> = ({ className, children, ...other }) => {
  return (
    <div className="input-wrapper">
      <p
        className={cn("input-wrapper__title", {
          "input-wrapper__title_dark": other.isDarkTheme,
        })}
      >
        {children}
      </p>
      <input
        className={cn("input-wrapper__input", className, {
          "input-wrapper__input_dark": other.isDarkTheme,
          "input-wrapper__input_error": other.isError,
          "input-wrapper__input_dark_error": other.isDarkTheme && other.isError,
          [`${className}_dark`]: other.isDarkTheme && className,
        })}
        placeholder={other.placeholder}
      />
      {other.isError ? (
        <div className="input-wrapper__error">
          <ErrorIcon />
          <p>{other.errorMessage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
