import {
  forwardRef,
  LegacyRef,
  ChangeEvent,
  SetStateAction,
  Dispatch,
} from "react";
import classNames from "classnames";
import useWindowSize from "../../hooks/useWindowSize";
import type { Size } from "../../types";
import DropIcon from "./../../assets/img/dropPainting.svg";
import { Button } from "../../ui/Button";
import { ReactComponent as Delete } from "../../assets/img/delete.svg";
import styles from "./PaintingChild.scss";

const cn = classNames.bind(styles);

type TPaintingChild = {
  isDarkTheme?: boolean;
  isDrag: boolean;
  fileData?: string | ArrayBuffer;
  setFileData: Dispatch<SetStateAction<string | ArrayBuffer>>;
  handlPick: () => void;
  handlChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sizeFile?: number;
};
type TRef = HTMLInputElement;

const PaintingChild = forwardRef<TRef, TPaintingChild>(
  (
    {
      isDarkTheme,
      isDrag,
      fileData,
      setFileData,
      handlPick,
      handlChange,
      sizeFile,
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const widthWindow: Size = useWindowSize();

    return (
      <div
        className={cn("paintingChild", {
          paintingChild_drag: isDrag,
        })}
      >
        <img
          alt="dropImg"
          className={cn("paintingChild__img", {
            paintingChild__img_dark: isDarkTheme,
            paintingChild__img_uploaded: fileData,
          })}
          src={fileData ? fileData.toString() : DropIcon}
        />
        <p
          className={cn("paintingChild__text", {
            paintingChild__text_dark: isDarkTheme,
          })}
        >
          Drop your image here, or
        </p>
        <div
          className={cn("paintingChild__buttonWrapper", {
            paintingChild__buttonWrapper_drag: isDrag,
          })}
        >
          <Button
            isDarkTheme={isDarkTheme}
            isOutlined
            className="button__inline"
            onClick={handlPick}
          >
            {Number(widthWindow.width) >= 768 ? "browse" : "browse image"}
          </Button>
        </div>
        <p
          className={cn("paintingChild__dropRules", {
            paintingChild__dropRules_dark: isDarkTheme,
          })}
        >
          Upload only .jpg or .png format less than 3 MB
        </p>
        <input
          ref={ref}
          type="file"
          className="paintingChild__input"
          onChange={handlChange}
          accept=".jpg,.jpeg,.png"
        />
        {fileData && (
          <div className="paintingChild__deleteWrapper">
            <Button
              className="button__dragDeleteImg"
              isDarkTheme={isDarkTheme}
              onClick={() => setFileData("")}
            >
              <Delete />
            </Button>
          </div>
        )}
        {fileData && sizeFile && sizeFile > 3 && (
          <div className="paintingChild__error">
            Image size is more than 3mb
          </div>
        )}
      </div>
    );
  }
);

export default PaintingChild;

PaintingChild.displayName = "PaintingChild";
