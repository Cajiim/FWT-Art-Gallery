import { DragEvent, FC, useState, useRef, ChangeEvent } from "react";
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
  const [fileData, setFileData] = useState<string | ArrayBuffer>();

  const handlPick = () => {
    ref.current?.click();
  };

  const handlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const inputFile = e.target.files && e.target.files[0];
    if (inputFile) {
      reader.onloadend = () => {
        setFileData(reader.result as string);
      };
      reader.readAsDataURL(inputFile);
    }
  };

  const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    if (file) {
      setFileData(URL.createObjectURL(e.dataTransfer.files[0]));
      reader.onloadend = () => {
        setFileData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setIsDrag(false);
  };

  return (
    <div
      className={cn("dragAndDrop", {
        dragAndDrop_drag: isDrag && isDarkTheme,
        dragAndDrop_uploaded: fileData,
      })}
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      onDrop={(e) => onDropHandler(e)}
    >
      <PaintingChild
        isDarkTheme={isDarkTheme}
        isDrag={isDrag}
        fileData={fileData}
        handlPick={handlPick}
        handlChange={handlChange}
        ref={ref}
      />
    </div>
  );
};

export default DragAndDrop;
