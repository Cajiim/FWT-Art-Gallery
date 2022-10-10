import { FC } from "react";
import { TLoader } from "../../types";
import classNames from "classnames";
import styles from "./Loader.scss";
const cn = classNames.bind(styles);

const Loader: FC<TLoader> = ({ ...other }) => {
  return (
    <div
      className={cn("loader", {
        loader_dark: other.isDarkTheme,
      })}
    >
      <svg className="loader__spinner">
        <circle className="loader__circle" cx="25" cy="25" r="20" fill="none" />
      </svg>
      <svg className="loader__spinner_two">
        <circle
          className="loader__circle_two"
          cx="25"
          cy="25"
          r="20"
          fill="none"
        />
      </svg>
      <svg className="loader__spinner_three">
        <circle
          className="loader__circle_three"
          cx="25"
          cy="25"
          r="20"
          fill="none"
        />
      </svg>
      <svg className="loader__spinner_four">
        <circle
          className="loader__circle_four"
          cx="25"
          cy="25"
          r="20"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Loader;
