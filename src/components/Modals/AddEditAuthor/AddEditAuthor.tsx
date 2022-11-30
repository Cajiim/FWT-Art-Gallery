import { FC, Dispatch, SetStateAction, useRef, useState } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import {
  handlChange,
  dragStartHandler,
  dragLeaveHandler,
  onDropHandler,
} from "../../../utils/getDrag";
import AuthorChild from "./AuthorChild";
import DropArea from "./DropArea";
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
      })}
      onClick={() => setIsOpen(false)}
      aria-hidden
    >
      <div
        className={cn("editAuthor__content", {
          editAuthor__content_dark: isDarkTheme,
        })}
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
          <DropArea isDarkTheme={isDarkTheme} />
        )}
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AddEditAuthor;
