import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./MenuItem.scss";

const cn = classNames.bind(styles);

type TMenuItem = HTMLAttributes<HTMLButtonElement> & {
  isDarkTheme?: boolean;
};

const MenuItem: FC<TMenuItem> = ({ isDarkTheme, ...args }) => {
  const { children, className, onClick } = args;
  return (
    <button
      className={cn("menuItem", className, {
        menuItem_dark: isDarkTheme,
      })}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default MenuItem;
