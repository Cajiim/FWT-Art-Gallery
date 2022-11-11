import { forwardRef, LegacyRef, ChangeEvent } from "react";
import classNames from "classnames";
import DropIcon from "./../../assets/img/dropPainting.svg";
import { Button } from "../../ui/Button";
import { ReactComponent as Delete } from "../../assets/img/delete.svg";
import styles from "./PaintingChild.scss";

const cn = classNames.bind(styles);

type TPaintingChild = {
  isDarkTheme?: boolean;
  isDrag: boolean;
  fileData?: string | ArrayBuffer;
  handlPick: () => void;
  handlChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
type TRef = HTMLInputElement;

const PaintingChild = forwardRef<TRef, TPaintingChild>(
  (
    { isDarkTheme, isDrag, fileData, handlPick, handlChange },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={cn("paintingChild", {
          paintingChild_drag: isDrag && isDarkTheme,
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
          <Button
            isDarkTheme={isDarkTheme}
            isOutlined
            className="button__inline"
            onClick={handlPick}
          >
            {"browse"}
          </Button>
        </p>
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
        />
        {fileData && (
          <div className="paintingChild__deleteWrapper">
            <Button className="button__dragDeleteImg" isDarkTheme={isDarkTheme}>
              <Delete />
            </Button>
          </div>
        )}
      </div>
    );
  }
);

export default PaintingChild;

PaintingChild.displayName = "PaintingChild";
