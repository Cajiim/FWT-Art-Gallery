import { FC } from "react";
import type { TLink } from "../../types";
import classNames from "classnames";
import styles from "./Link.scss";
const cn = classNames.bind(styles);

const Link: FC<TLink> = ({ link, children, isDarkTheme, ...other }) => {
  return (
    <a
      href={link}
      {...other}
      className={cn("link", other.className, {
        link_dark: isDarkTheme,
      })}
    >
      {children}
    </a>
  );
};

export default Link;
