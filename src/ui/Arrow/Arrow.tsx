import { FC, HTMLAttributes } from "react";
import { ReactComponent as DropDown } from "../../assets/img/dropDownArrow.svg";
import classNames from "classnames";
import styles from "./Arrow.scss";

const cn = classNames.bind(styles);

type TArrow = HTMLAttributes<HTMLDivElement> & {
  isOpen?: boolean;
  isDarkTheme?: boolean;
};

const Arrow: FC<TArrow> = ({ isOpen, isDarkTheme }) => {
  return (
    <div
      className={cn("arrow", {
        arrow_open: isOpen,
        arrow_dark: isDarkTheme,
      })}
    >
      <DropDown width="12px" height="7px" />
    </div>
  );
};

export default Arrow;
