import { FC } from "react";
import classNames from "classnames";
import styles from "./Input.scss";
const cn = classNames.bind(styles);

export type TInput = {
  className: string;
  other: HTMLInputElement;
  isDarkTheme?: boolean;
  isError?: boolean;
  placeholder?: string;
};

const Input: FC<TInput> = ({ className, ...other }) => {
  return (
    <input
      className={cn("input", className, {
        input_dark: other.isDarkTheme,
        input_error: other.isError,
        input_dark_error: other.isDarkTheme && other.isError,
      })}
      placeholder={other.placeholder}
    />
  );
};

export default Input;
