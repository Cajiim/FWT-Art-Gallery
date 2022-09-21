import { FC } from "react";
import type { TButton } from "../../types";
import classNames from "classnames";
import styles from "./Button.scss";
const cn = classNames.bind(styles);

const Button: FC<TButton> = ({ className, children, onClick, ...other }) => {
  return (
    <button
      className={cn("button", className, {
        button_dark: other.isDarkTheme,
        button_outlined: other.isOutlined,
        button_outlined_dark: other.isDarkTheme && other.isOutlined,
      })}
      disabled={other.isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
