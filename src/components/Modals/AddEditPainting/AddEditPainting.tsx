import { FC, Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import DropIcon from "../../../assets/img/dropPainting.svg";
import { CloseIcon } from "../../../ui/CloseIcon";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import styles from "./AddEditPainting.scss";

const cn = classNames.bind(styles);

type TAddEditPainting = {
  isDarkTheme?: boolean;
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AddEditPainting: FC<TAddEditPainting> = ({
  isDarkTheme,
  isOpen,
  setIsOpen,
}) => {
  return createPortal(
    <div
      className={cn("editPainting", {
        editPainting_dark: isDarkTheme,
        editPainting_open: isOpen,
      })}
      onClick={() => setIsOpen(false)}
      aria-hidden
    >
      <div
        className={cn("editPainting__content", {
          editPainting__content_dark: isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
        aria-hidden
      >
        <CloseIcon
          isVisible
          className="closeIcon__editPainting"
          isDarkTheme={isDarkTheme}
          onClick={() => setIsOpen(false)}
        />
        <div className="editPainting__inputs">
          <Input isDarkTheme={isDarkTheme}>The name of the picture</Input>
          <Input
            isDarkTheme={isDarkTheme}
            className="input-wrapper__inputAddEditPainting"
          >
            Year of creation
          </Input>
        </div>
        <div
          className={cn("editPainting__dropContent", {
            editPainting__dragAndDrop_dark: isDarkTheme,
          })}
        >
          <img
            alt="dropImg"
            className={cn("editPainting__img", {
              editPainting__img_dark: isDarkTheme,
            })}
            src={DropIcon}
          />
          <p
            className={cn("editPainting__text", {
              editPainting__text_dark: isDarkTheme,
            })}
          >
            Drop your image here, or <br />
            <Button
              isDarkTheme={isDarkTheme}
              isOutlined
              className="button__inline"
            >
              {"browse"}
            </Button>
          </p>
          <p
            className={cn("editPainting__dropRules", {
              editPainting__dropRules_dark: isDarkTheme,
            })}
          >
            Upload only .jpg or .png format less than 3 MB
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AddEditPainting;
