import { FC } from "react";
import classNames from "classnames";
import { ReactComponent as InstIcon } from "../../assets/img/inst.svg";
import styles from "./Instagram.scss";
const cn = classNames.bind(styles);

type TInstagram = {
  className?: string;
  isDarkTheme?: boolean;
  other?: HTMLAnchorElement;
};

const Instagram: FC<TInstagram> = ({ ...other }) => {
  return (
    <a
      className={cn("instagram", other.className, {
        instagram_dark: other.isDarkTheme,
      })}
      href="https://www.instagram.com/framework.team/"
    >
      <InstIcon />
    </a>
  );
};

export default Instagram;
