import { FC } from "react";
import type { TLabel } from "../../types";
import { CloseIcon } from "../CloseIcon";
import classNames from "classnames";
import styles from "./Label.scss";
const cn = classNames.bind(styles);

const Label: FC<TLabel> = ({ children, className, ...other }) => {
  return (
    <label
      className={cn("label", className, {
        label_dark: other.isDarkTheme,
      })}
    >
      <p
        className={cn("label__text", className, {
          label__text_dark: other.isDarkTheme,
        })}
      >
        {children}
      </p>
      <CloseIcon isDarkTheme={other.isDarkTheme} isVisible={other.isVisible} />
    </label>
  );
};

export default Label;
