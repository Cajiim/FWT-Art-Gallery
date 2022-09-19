import { FC } from "react";
import classNames from "classnames";
import styles from "./Button.scss";
const cn = classNames.bind(styles);

export type TButton = {
  className: string;
  children: string;
  onClick: () => void;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isDarkTheme?: boolean;
  other: HTMLButtonElement;
};

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
