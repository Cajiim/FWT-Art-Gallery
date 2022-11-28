import { FC, Dispatch, SetStateAction, useRef, useState } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import {
  handlChange,
  dragStartHandler,
  dragLeaveHandler,
  onDropHandler,
} from "../../../utils/getDrag";
import DropIcon from "../../../assets/img/dropIcon.svg";
import AuthorChild from "./AuthorChild";
import styles from "./AddEditAuthor.scss";

const cn = classNames.bind(styles);

type TAddEditAuthor = {
  isDarkTheme?: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AddEditAuthor: FC<TAddEditAuthor> = ({
  isDarkTheme,
  isOpen,
  setIsOpen,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [fileData, setFileData] = useState<string | ArrayBuffer>("");
  const [sizeFile, setSizeFile] = useState<number>(0);
  const handlPick = () => {
    ref.current?.click();
  };
  return createPortal(
    <div
      className={cn("editAuthor", {
        editAuthor_dark: isDarkTheme,
        editAuthor_open: isOpen,
        editAuthor_drag: isDrag,
      })}
      onClick={() => setIsOpen(false)}
      aria-hidden
      ///Не тут должно быть
      onDragStart={(e) => dragStartHandler(e, setIsDrag)}
      onDragLeave={(e) => dragLeaveHandler(e, setIsDrag)}
      onDragOver={(e) => dragStartHandler(e, setIsDrag)}
      onDrop={(e) => onDropHandler(e, setFileData, setSizeFile, setIsDrag)}
    >
      {!isDrag ? (
        <AuthorChild
          isDarkTheme={isDarkTheme}
          isDrag={isDrag}
          fileData={fileData}
          setFileData={setFileData}
          handlPick={handlPick}
          handlChange={(e) => handlChange(e, setFileData, setSizeFile)}
          sizeFile={sizeFile}
          setIsOpen={setIsOpen}
          ref={ref}
        />
      ) : (
        <div
          className={cn("editAuthor__dropWindow", {
            editAuthor__dropWindow_dark: isDarkTheme,
          })}
          onClick={(e) => e.stopPropagation()}
          aria-hidden
        >
          <img
            className={cn("editAuthor__image", {
              editAuthor__image_dark: isDarkTheme,
            })}
            alt="dropIcon"
            src={DropIcon}
          />
          <p
            className={cn("editAuthor__text", {
              editAuthor__text_dark: isDarkTheme,
            })}
          >
            Drop your image here
          </p>
          <p
            className={cn("editAuthor__rules", {
              editAuthor__rules_dark: isDarkTheme,
            })}
          >
            Upload only .jpg or .png format less than 3 MB
          </p>
        </div>
      )}
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AddEditAuthor;
