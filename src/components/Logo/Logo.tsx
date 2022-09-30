import { FC } from "react";
import classNames from "classnames";
import { ReactComponent as LogoIcon } from "../../assets/img/logoSVG.svg";
import styles from "./Logo.scss";
const cn = classNames.bind(styles);

type TLogo = {
  isDarkTheme?: boolean;
  className?: string;
};

const Logo: FC<TLogo> = ({ isDarkTheme, className }) => {
  return (
    <div
      className={cn("logo", className, {
        logo_dark: isDarkTheme,
      })}
    >
      <LogoIcon />
    </div>
  );
};

export default Logo;
