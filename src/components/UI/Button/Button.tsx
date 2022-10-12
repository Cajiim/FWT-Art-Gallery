import { FC } from "react";
import type { TButton } from "../../../types";
import classNames from "classnames";
import styles from "./Button.scss";

const cn = classNames.bind(styles);

const Button: FC<TButton> = ({ className, children, onClick, ...args }) => {
  const { isDarkTheme, isOutlined, isDisabled } = args;
  return (
    <button
      className={cn("button", className, {
        button_dark: isDarkTheme,
        button_outlined: isOutlined,
        button_outlined_dark: isDarkTheme && isOutlined,
      })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
