import { FC } from "react";
import classNames from "classnames";
import styles from "./Checkbox.scss";
const cn = classNames.bind(styles);

export type TCheckbox = {
  className?: string;
  handlClick: () => void;
  other: HTMLInputElement;
  isDarkTheme?: boolean;
};

const Checkbox: FC<TCheckbox> = ({ className, handlClick, ...other }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        onChange={() => {
          handlClick();
        }}
      />
      <span
        className={cn("checkbox__fake", className, {
          checkbox__fake_dark: other.isDarkTheme,
        })}
      />
    </div>
  );
};

export default Checkbox;
