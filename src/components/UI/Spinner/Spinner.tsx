import { FC } from "react";
import classNames from "classnames";
import styles from "./Spinner.scss";

const cn = classNames.bind(styles);

type TSpinner = {
  modifier?: string;
};

const Spinner: FC<TSpinner> = ({ modifier }) => (
  <svg
    className={cn("spinner", {
      [`spinner_${modifier}`]: modifier,
    })}
  >
    <circle
      className={cn("spinner__circle", {
        [`spinner__circle_${modifier}`]: modifier,
      })}
      cx="25"
      cy="25"
      r="20"
      fill="none"
    />
  </svg>
);

export default Spinner;
