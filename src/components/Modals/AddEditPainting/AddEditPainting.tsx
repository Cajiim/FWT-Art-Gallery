import { FC } from "react";
import classNames from "classnames";
import { CloseIcon } from "../../../ui/CloseIcon";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import styles from "./AddEditPainting.scss";

const cn = classNames.bind(styles);

type TAddEditPainting = {
  isDarkTheme: boolean;
  isOpen: boolean;
};

const AddEditPainting: FC<TAddEditPainting> = ({ isDarkTheme, isOpen }) => {
  return (
    <div
      className={cn("editPainting", {
        editPainting_dark: isDarkTheme,
        editPainting_open: isOpen,
      })}
    >
      <div
        className={cn("editPainting__content", {
          editPainting__content_dark: isDarkTheme,
        })}
      >
        <CloseIcon
          isVisible
          className="closeIcon__addEditPainting"
          isDarkTheme={isDarkTheme}
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
          className={cn("editPainting__content", {
            editPainting__dragAndDrop_dark: isDarkTheme,
          })}
        >
          <img
            alt="dropImg"
            className={cn("editPainting__img", {
              editPainting__img_dark: isDarkTheme,
            })}
          />
          <p
            className={cn("editPainting__text", {
              editPainting__text_dark: isDarkTheme,
            })}
          >
            Drop your image here, or
            <Button isDarkTheme={isDarkTheme}>browse</Button>
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
    </div>
  );
};

export default AddEditPainting;
