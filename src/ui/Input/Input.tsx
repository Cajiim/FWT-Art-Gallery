import { FC, useState } from "react";
import type { TInput } from "../../types";
import classNames from "classnames";
import { ReactComponent as ErrorIcon } from "../../assets/img/error.svg";
import { ReactComponent as Eye } from "../../assets/img/eye.svg";
import { ReactComponent as EyeCross } from "../../assets/img/eyeCrossed.svg";
import styles from "./Input.scss";

const cn = classNames.bind(styles);

const Input: FC<TInput> = ({
  className,
  children,
  onBlur,
  placeholder,
  onChange,
  ...args
}) => {
  const { type, name, value, isDarkTheme, isError, errorMessage } = args;
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const correctType = type === "password" && isEyeOpen ? "text" : type;

  return (
    <div className="input-wrapper">
      <p
        className={cn("input-wrapper__title", {
          "input-wrapper__title_dark": isDarkTheme,
        })}
      >
        {children}
      </p>
      <input
        className={cn("input-wrapper__input", className, {
          "input-wrapper__input_dark": isDarkTheme,
          "input-wrapper__input_error": isError,
          "input-wrapper__input_dark_error": isDarkTheme && isError,
          [`${className}_dark`]: isDarkTheme && className,
        })}
        placeholder={placeholder}
        type={correctType}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
      <div
        className={cn("input-wrapper__eye", {
          "input-wrapper__eye_visible":
            type === "password" && value && value.length > 0,
        })}
        onClick={() => setIsEyeOpen(!isEyeOpen)}
        aria-hidden
      >
        {isEyeOpen ? <EyeCross /> : <Eye />}
      </div>
      {args.isError ? (
        <div className="input-wrapper__error">
          <div className="input-wrapper__errorIcon">
            <ErrorIcon />
          </div>
          <p>{errorMessage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
