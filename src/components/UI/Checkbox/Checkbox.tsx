import { FC, useState } from "react";
import type { TCheckbox } from "../../../types";
import classNames from "classnames";
import styles from "./Checkbox.scss";

const cn = classNames.bind(styles);

const Checkbox: FC<TCheckbox> = ({ className, id, ...args }) => {
  const { isDarkTheme } = args;
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const handlClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label htmlFor={id} className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox__input"
        checked={isChecked}
        onChange={handlClick}
      />
      <span
        className={cn("checkbox__fake", className, {
          checkbox__fake_dark: isDarkTheme,
        })}
      />
    </label>
  );
};

export default Checkbox;
