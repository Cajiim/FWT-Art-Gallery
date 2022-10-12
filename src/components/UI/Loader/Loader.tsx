import { FC } from "react";
import { TLoader } from "../../../types";
import { Spinner } from "../Spinner";
import classNames from "classnames";
import styles from "./Loader.scss";

const cn = classNames.bind(styles);

const Loader: FC<TLoader> = ({ ...args }) => {
  const { isDarkTheme } = args;
  return (
    <div
      className={cn("loader", {
        loader_dark: isDarkTheme,
      })}
    >
      <Spinner />
      <Spinner modifier="two" />
      <Spinner modifier="three" />
      <Spinner modifier="four" />
    </div>
  );
};

export default Loader;
