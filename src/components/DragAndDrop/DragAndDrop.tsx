import { FC, useState, useRef } from "react";
import {
  handlChange,
  dragStartHandler,
  dragLeaveHandler,
  onDropHandler,
} from "../../utils/getDrag";
import classNames from "classnames";
import PaintingChild from "./PaintingChild";
import styles from "./DragAndDrop.scss";

const cn = classNames.bind(styles);

type TDragAndDrop = {
  isDarkTheme?: boolean;
};

const DragAndDrop: FC<TDragAndDrop> = ({ isDarkTheme }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [fileData, setFileData] = useState<string | ArrayBuffer>("");
  const [sizeFile, setSizeFile] = useState<number>(0);
  const handlPick = () => {
    ref.current?.click();
  };

  return (
    <div
      className={cn("dragAndDrop", {
        dragAndDrop_drag: isDrag && isDarkTheme,
        dragAndDrop_uploaded: fileData,
      })}
      onDragStart={(e) => dragStartHandler(e, setIsDrag)}
      onDragLeave={(e) => dragLeaveHandler(e, setIsDrag)}
      onDragOver={(e) => dragStartHandler(e, setIsDrag)}
      onDrop={(e) => onDropHandler(e, setFileData, setSizeFile, setIsDrag)}
    >
      <PaintingChild
        isDarkTheme={isDarkTheme}
        isDrag={isDrag}
        fileData={fileData}
        setFileData={setFileData}
        handlPick={handlPick}
        handlChange={(e) => handlChange(e, setFileData, setSizeFile)}
        sizeFile={sizeFile}
        ref={ref}
      />
    </div>
  );
};

export default DragAndDrop;
