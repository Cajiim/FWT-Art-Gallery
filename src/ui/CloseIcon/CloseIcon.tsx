import { FC } from "react";
import { ReactComponent as Close } from "../../assets/img/closeIcon.svg";
import classNames from "classnames";
import styles from "./CloseIcon.scss";
const cn = classNames.bind(styles);

type TCloseIcon = {
  isDarkTheme?: boolean;
  className?: string;
  isVisible?: boolean;
};

const CloseIcon: FC<TCloseIcon> = ({ isDarkTheme, className, isVisible }) => {
  return (
    <div
      className={cn("closeIcon", className, {
        closeIcon_dark: isDarkTheme,
        closeIcon_visible: isVisible,
      })}
    >
      <Close />
    </div>
  );
};

export default CloseIcon;