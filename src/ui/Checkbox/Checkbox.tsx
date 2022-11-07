import { FC, ChangeEvent } from "react";
import type { TCheckbox } from "../../types";
import classNames from "classnames";
import styles from "./Checkbox.scss";

const cn = classNames.bind(styles);

const Checkbox: FC<TCheckbox> = ({
  className,
  id,
  children,
  arrGenres,
  setArrGenres,
  ...other
}) => {
  /*  const [value, setValue] = useState<boolean>(true); */
  /* const handlClick = () => {
    setValue(!value);
  }; */
  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setArrGenres([...arrGenres, value]);
    } else {
      setArrGenres(arrGenres.filter((el) => el !== value));
    }
  };
  return (
    <label htmlFor={id} className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox__input"
        value={id}
        checked={arrGenres.includes(children)}
        onChange={handleChangeColor}
      />
      <span
        className={cn("checkbox__fake", className, {
          checkbox__fake_dark: other.isDarkTheme,
        })}
      />
      <span
        className={cn("checkbox__text", className, {
          checkbox__text_dark: other.isDarkTheme,
        })}
      >
        {children}
      </span>
    </label>
  );
};

export default Checkbox;
