import {
  Dispatch,
  SetStateAction,
  forwardRef,
  LegacyRef,
  ChangeEvent,
} from "react";
import classNames from "classnames";
import DropIcon from "../../../assets/img/dropIcon.svg";
import { Input } from "../../../ui/Input";
import { Textarea } from "../../../ui/Textarea";
import { Multiselect } from "../../../ui/Multiselect";
import { Button } from "../../../ui/Button";
import { CloseIcon } from "../../../ui/CloseIcon";
import { ReactComponent as Delete } from "../../../assets/img/delete.svg";
import styles from "./AuthorChild.scss";

const cn = classNames.bind(styles);

type TAuthorChild = {
  isDarkTheme?: boolean;
  isDrag: boolean;
  fileData?: string | ArrayBuffer;
  setFileData: Dispatch<SetStateAction<string | ArrayBuffer>>;
  handlPick: () => void;
  handlChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sizeFile?: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
type TRef = HTMLInputElement;

const AuthorChild = forwardRef<TRef, TAuthorChild>(
  (
    {
      setIsOpen,
      isDarkTheme,
      fileData,
      setFileData,
      handlPick,
      handlChange,
      sizeFile,
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <form
        className={cn("authorChild", {
          authorChild_dark: isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon
          isDarkTheme={isDarkTheme}
          onClick={() => setIsOpen(false)}
          className="closeIcon__authorChild"
        />
        <div className="authorChild__editImageWrapper">
          <div
            className={cn("authorChild__dropDown", {
              authorChild__dropDown_dark: isDarkTheme,
              authorChild__dropDown_uploaded: fileData,
            })}
          >
            <img
              alt="dropIconImg"
              src={fileData ? fileData.toString() : DropIcon}
              className={cn("authorChild__editImage", {
                authorChild__editImage_dark: isDarkTheme,
                authorChild__editImage_uploaded: fileData,
              })}
            />
            <span
              className={cn("authorChild__dropDownText", {
                authorChild__dropDownText_dark: isDarkTheme,
              })}
            >
              {"You can drop your image here"}
            </span>
            {fileData && (
              <div className="authorChild__deleteWrapper">
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
              <div className="authorChild__error">
                Image size is more than 3mb
              </div>
            )}
          </div>
          <Button isDarkTheme={isDarkTheme} isOutlined onClick={handlPick}>
            Browse profile photo
          </Button>
        </div>
        <div className="authorChild__inputFields">
          <Input isDarkTheme={isDarkTheme}>Name*</Input>
          <Input isDarkTheme={isDarkTheme}>Years of life</Input>
          <Input isDarkTheme={isDarkTheme}>Location</Input>
          <Textarea description="Description" isDarkTheme={isDarkTheme} />
          <Multiselect isDarkTheme={isDarkTheme} />
          <Button isDarkTheme={isDarkTheme} className="button__authorChild">
            {"save"}
          </Button>
        </div>
        <input
          ref={ref}
          type="file"
          className="authorChild__input"
          onChange={handlChange}
          accept=".jpg,.jpeg,.png"
        />
      </form>
    );
  }
);

export default AuthorChild;

AuthorChild.displayName = "AuthorChild";
