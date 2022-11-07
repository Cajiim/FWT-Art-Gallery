import { FC, HTMLAttributes, useState, useRef, ReactNode } from "react";
import classNames from "classnames";
import { ReactComponent as DropArrow } from "../../assets/img/dropDownArrow.svg";
import { Checkbox } from "../Checkbox";
import { Label } from "../Label";
import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "./Multiselect.scss";

const cn = classNames.bind(styles);

type TMultiselect = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme?: boolean;
};

const Multiselect: FC<TMultiselect> = ({ isDarkTheme }) => {
  const data = ["Romanticism", "Art", "Nature", "Bataille", "Realistic"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const toggleOpen = () => setIsOpen(!isOpen);
  useOutsideClick(ref, toggleOpen);

  const [arrGenres, setArrGenres] = useState<ReactNode[]>([]);

  return (
    <div className="multiselect" ref={isOpen ? ref : null}>
      <div
        className={cn("multiselect__content", {
          multiselect__content_dark: isDarkTheme,
          multiselect__content_open: isOpen,
          multiselect__content_openDark: isOpen && isDarkTheme,
        })}
      >
        <ul
          className={cn("multiselect__labelList", {
            multiselect__labelList_dark: isDarkTheme,
          })}
        >
          {arrGenres.map((el) => (
            <li
              className="multiselect__label"
              onClick={(e) => e.stopPropagation()}
              key={el?.toString()}
            >
              <Label
                isVisible
                className="label__multiselect"
                isDarkTheme={isDarkTheme}
                onClick={() =>
                  setArrGenres(arrGenres.filter((lab) => lab !== el))
                }
              >
                {el}
              </Label>
            </li>
          ))}
        </ul>
        <div
          className={cn("multiselect__dropDown", {
            multiselect__dropDown_open: isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
          aria-hidden
        >
          <DropArrow />
        </div>
      </div>
      {isOpen && (
        <ul
          className={cn("multiselect__genresList", {
            multiselect__genresList_dark: isDarkTheme,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          {data.map((el) => (
            <li
              className={cn("multiselect__genres", {
                multiselect__genres_dark: isDarkTheme,
              })}
              key={el.toString()}
            >
              <Checkbox
                arrGenres={arrGenres}
                setArrGenres={setArrGenres}
                id={el}
                isDarkTheme={isDarkTheme}
              >
                {el}
              </Checkbox>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Multiselect;
