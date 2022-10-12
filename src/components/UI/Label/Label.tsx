import { FC } from "react";
import type { TLabel } from "../../../types";
import { CloseIcon } from "../CloseIcon";
import classNames from "classnames";
import styles from "./Label.scss";

const cn = classNames.bind(styles);

const Label: FC<TLabel> = ({ children, className, ...args }) => {
  const { isVisible, isDarkTheme } = args;
  return (
    <label
      className={cn("label", className, {
        label_dark: isDarkTheme,
      })}
    >
      <p
        className={cn("label__text", className, {
          label__text_dark: isDarkTheme,
        })}
      >
        {children}
      </p>
      <CloseIcon isDarkTheme={isDarkTheme} isVisible={isVisible} />
    </label>
  );
};

export default Label;