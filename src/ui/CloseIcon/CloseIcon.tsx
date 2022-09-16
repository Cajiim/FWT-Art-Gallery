import { FC } from "react";
import { ReactComponent as Close } from "../../assets/img/closeIcon.svg";
import classNames from "classnames";
import styles from "./CloseIcon.scss";
const cn = classNames.bind(styles);

type TCloseIcon = {
  isDarkTheme?: boolean;
  className?: string;
};

const CloseIcon: FC<TCloseIcon> = ({ isDarkTheme, className }) => {
  return (
    <div
      className={cn("closeIcon", className, {
        closeIcon_dark: isDarkTheme,
      })}
    >
      <Close />
    </div>
  );
};

export default CloseIcon;
