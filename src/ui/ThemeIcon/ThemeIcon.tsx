import { FC } from "react";
import classNames from "classnames";
import { ReactComponent as DarkIcon } from "../../assets/img/darkIcon.svg";
import { ReactComponent as LightIcon } from "../../assets/img/lightIcon.svg";
import styles from "./ThemeIcon.scss";
const cn = classNames.bind(styles);

type TThemeIcon = {
  onClick?: () => void;
  isDarkTheme?: boolean;
  other?: HTMLDivElement;
};

const ThemeIcon: FC<TThemeIcon> = ({ onClick, ...other }) => {
  return (
    <div
      className={cn("themeIcon", {
        themeIcon_dark: other.isDarkTheme,
      })}
      onClick={onClick}
      aria-hidden
    >
      {other.isDarkTheme ? <DarkIcon /> : <LightIcon />}
    </div>
  );
};

export default ThemeIcon;
