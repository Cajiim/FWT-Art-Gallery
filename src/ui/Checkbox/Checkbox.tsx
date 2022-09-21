import { FC, useState } from "react";
import type { TCheckbox } from "../../types";
import classNames from "classnames";
import styles from "./Checkbox.scss";
const cn = classNames.bind(styles);

const Checkbox: FC<TCheckbox> = ({ className, id, ...other }) => {
  const [value, setValue] = useState<boolean>(true);
  const handlClick = () => {
    setValue(!value);
  };
  return (
    <label htmlFor={id} className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox__input"
        checked={value}
        onChange={handlClick}
      />
      <span
        className={cn("checkbox__fake", className, {
          checkbox__fake_dark: other.isDarkTheme,
        })}
      />
    </label>
  );
};

export default Checkbox;
