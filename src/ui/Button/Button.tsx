import { FC } from "react";
import type { TButton } from "../../types";
import classNames from "classnames";
import styles from "./Button.scss";
const cn = classNames.bind(styles);

const Button: FC<TButton> = ({ children, onClick, ...other }) => {
  return (
    <button
      className={cn("button", other.className, {
        button_dark: other.isDarkTheme,
        button_outlined: other.isOutlined,
        button_outlined_dark: other.isDarkTheme && other.isOutlined,
        [`button_${other.size}`]: other.size,
      })}
      disabled={other.isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
