import { FC, Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import {
  handlChangeName,
  handlChangeYear,
  handlClickBlur,
} from "../../../utils/getPaintingValidation";
import { DragAndDrop } from "../../DragAndDrop";
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
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [yearDirty, setYearDirty] = useState(false);
  const [nameError, setNameError] = useState("Name cannot be empty");
  const [yearError, setYearError] = useState("Cannot be empty");

  return createPortal(
    <div
      className={cn("editPainting", {
        editPainting_dark: isDarkTheme,
        editPainting_open: isOpen,
      })}
      onClick={() => setIsOpen(false)}
      aria-hidden
    >
      <form
        className={cn("editPainting__content", {
          editPainting__content_dark: isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
        aria-hidden
      >
        <CloseIcon
          className="closeIcon__editPainting"
          isDarkTheme={isDarkTheme}
          onClick={() => setIsOpen(false)}
        />
        <div className="editPainting__inputs">
          <Input
            isDarkTheme={isDarkTheme}
            name="name"
            value={name}
            onChange={(e) => handlChangeName(e, setName, setNameError)}
            onBlur={(e) => handlClickBlur(e, setNameDirty, setYearDirty)}
            isError={nameDirty && nameError !== ""}
            errorMessage={nameError}
          >
            The name of the picture
          </Input>
          <Input
            isDarkTheme={isDarkTheme}
            className="input-wrapper__inputAddEditPainting"
            name="year"
            value={year}
            onChange={(e) => handlChangeYear(e, setYear, setYearError)}
            onBlur={(e) => handlClickBlur(e, setNameDirty, setYearDirty)}
            isError={yearDirty && yearError !== ""}
            errorMessage={yearError}
            type="number"
          >
            Year of creation
          </Input>
        </div>
        <DragAndDrop isDarkTheme={isDarkTheme} />
        <Button isDarkTheme={isDarkTheme}>Save</Button>
      </form>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AddEditPainting;
