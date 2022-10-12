import { FC, HTMLAttributes } from "react";
import { ReactComponent as Close } from "../../../assets/img/closeIcon.svg";
import classNames from "classnames";
import styles from "./CloseIcon.scss";

const cn = classNames.bind(styles);

type TCloseIcon = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme?: boolean;
  isVisible?: boolean;
};

const CloseIcon: FC<TCloseIcon> = ({ className, ...args }) => {
  const { isVisible, isDarkTheme } = args;
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
