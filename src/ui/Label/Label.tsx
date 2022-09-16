import { FC } from "react";
import { CloseIcon } from "../CloseIcon";
import classNames from "classnames";
import styles from "./Label.scss";
const cn = classNames.bind(styles);

type TLabel = {
  children: string;
  className: string;
  other: HTMLAnchorElement;
  isDarkTheme?: boolean;
};

const Label: FC<TLabel> = ({ children, className, ...other }) => {
  return (
    <div className="label">
      <p
        className={cn("label__text", className, {
          label__text_dark: other.isDarkTheme,
        })}
      >
        {children}
      </p>
      <CloseIcon isDarkTheme={other.isDarkTheme} />
    </div>
  );
};

export default Label;
