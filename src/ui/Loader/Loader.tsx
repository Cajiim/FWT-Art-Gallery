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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;

/* 
className={cn("loader__animation", {
    loader__animation_dark: other.isDarkTheme,
  })} */
