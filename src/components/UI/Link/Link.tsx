import { FC } from "react";
import type { TLink } from "../../../types";
import classNames from "classnames";
import styles from "./Link.scss";

const cn = classNames.bind(styles);

const Link: FC<TLink> = ({ href, children, className, ...args }) => {
  const { isDarkTheme } = args;
  return (
    <a
      href={href}
      className={cn("link", className, {
        link_dark: isDarkTheme,
      })}
    >
      {children}
    </a>
  );
};

export default Link;
