import { FC } from "react";
import type { TButton } from "../../types";
import classNames from "classnames";
import styles from "./ButtonPictoral.scss";

const cn = classNames.bind(styles);

const ButtonPictoral: FC<TButton> = ({
  children,
  className,
  onClick,
  ...args
}) => {
  const { isDarkTheme } = args;
  return (
    <button
      className={cn("buttonPictoral", className, {
        buttonPictoral_dark: isDarkTheme,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPictoral;
