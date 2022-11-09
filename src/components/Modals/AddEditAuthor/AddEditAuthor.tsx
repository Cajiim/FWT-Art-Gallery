import { FC, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import DropIcon from "../../../assets/img/dropIcon.svg";
import { Input } from "../../../ui/Input";
import { Textarea } from "../../../ui/Textarea";
import { Multiselect } from "../../../ui/Multiselect";
import { Button } from "../../../ui/Button";
import { CloseIcon } from "../../../ui/CloseIcon";
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
  return createPortal(
    <div
      className={cn("editAuthor", {
        editAuthor_dark: isDarkTheme,
        editAuthor_open: isOpen,
      })}
      onClick={() => setIsOpen(false)}
      aria-hidden
    >
      <form
        className={cn("editAuthor__content", {
          editAuthor__content_dark: isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon
          isDarkTheme={isDarkTheme}
          onClick={() => setIsOpen(false)}
          className="closeIcon__editAuthor"
        />
        <div className="editAuthor__editImageWrapper">
          <div
            className={cn("editAuthor__dropDown", {
              editAuthor__dropDown_dark: isDarkTheme,
            })}
          >
            <img
              alt="dropIconImg"
              src={DropIcon}
              className={cn("editAuthor__editImage", {
                editAuthor__editImage_dark: isDarkTheme,
              })}
            />
            <span
              className={cn("editAuthor__dropDownText", {
                editAuthor__dropDownText_dark: isDarkTheme,
              })}
            >
              {"You can drop your image here"}
            </span>
          </div>
          <Button isDarkTheme={isDarkTheme} isOutlined onClick={() => {}}>
            Browse profile photo
          </Button>
        </div>
        <div className="editAuthor__inputFields">
          <Input isDarkTheme={isDarkTheme}>Name*</Input>
          <Input isDarkTheme={isDarkTheme}>Years of life</Input>
          <Input isDarkTheme={isDarkTheme}>Location</Input>
          <Textarea description="Description" isDarkTheme={isDarkTheme} />
          <Multiselect isDarkTheme={isDarkTheme} />
          <Button isDarkTheme={isDarkTheme} className="button__editAuthor">
            {"save"}
          </Button>
        </div>
      </form>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AddEditAuthor;
