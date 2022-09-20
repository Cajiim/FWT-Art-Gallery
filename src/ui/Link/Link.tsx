import { FC } from "react";
import classNames from "classnames";
import styles from "./Link.scss";
const cn = classNames.bind(styles);

export type TLink = {
  link: string;
  children: string;
  other: HTMLAnchorElement;
  isDarkTheme?: boolean;
  className?: string;
};

const Link: FC<TLink> = ({ link, children, ...other }) => {
  return (
    <a
      href={link}
      {...other}
      className={cn("link", other.className, {
        link_dark: other.isDarkTheme,
      })}
    >
      {children}
    </a>
  );
};

export default Link;
