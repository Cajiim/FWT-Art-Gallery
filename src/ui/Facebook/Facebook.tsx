import { FC } from "react";
import classNames from "classnames";
import { ReactComponent as FacebookIcon } from "../../assets/img/facebook.svg";
import styles from "./Facebook.scss";
const cn = classNames.bind(styles);

type TFacebook = {
  className?: string;
  isDarkTheme?: boolean;
  other?: HTMLAnchorElement;
};

const Facebook: FC<TFacebook> = ({ ...other }) => {
  return (
    <a
      className={cn("facebook", other.className, {
        facebook_dark: other.isDarkTheme,
      })}
      href="https://www.facebook.com/framework.team"
    >
      <FacebookIcon />
    </a>
  );
};

export default Facebook;
