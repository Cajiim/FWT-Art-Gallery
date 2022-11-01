import { FC, Dispatch } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { ReactComponent as DeleteIcon } from "../../../assets/img/deleteIconLarge.svg";
import { ReactComponent as Close } from "../../../assets/img/closeIconLarge.svg";
import { Button } from "../../../ui/Button";
import styles from "./Delete.scss";

const cn = classNames.bind(styles);

type TDelete = {
  isDarkTheme?: boolean;
  title: string;
  isOpen?: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const Delete: FC<TDelete> = ({ isDarkTheme, title, isOpen, setIsOpen }) => {
  return createPortal(
    <div
      className={cn("delete", {
        delete_dark: isDarkTheme,
        delete_open: isOpen,
      })}
      onClick={() => setIsOpen(false)}
      aria-hidden
    >
      <div
        className={cn("delete__container", {
          delete__container_dark: isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
        aria-hidden
      >
        <div
          className={cn("delete__closeIcon", {
            delete__closeIcon_dark: isDarkTheme,
          })}
          onClick={() => setIsOpen(false)}
          aria-hidden
        >
          <Close width="16px" height="16px" />
        </div>
        <div
          className={cn("delete__iconContainer", {
            delete__iconContainer_dark: isDarkTheme,
          })}
        >
          <DeleteIcon fill={!isDarkTheme ? "#575757" : "#9C9C9C"} />
        </div>
        <p
          className={cn("delete__question", {
            delete__question_dark: isDarkTheme,
          })}
        >
          Do you want to delete this {title}
        </p>
        <p className="delete__confirmation">
          You will not be able to recover this profile afterwards.
        </p>
        <div className="delete__buttons">
          <Button isDarkTheme={isDarkTheme}>{"Delete"}</Button>
          <Button
            isOutlined
            isDarkTheme={isDarkTheme}
            onClick={() => setIsOpen(false)}
          >
            {"Cancel"}
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Delete;
