import { FC, useState } from "react";
import classNames from "classnames";
import { Button } from "../../ui/Button";
import { ReactComponent as Plus } from "../../assets/img/plus.svg";
import { AddEditAuthor } from "../Modals/AddEditAuthor";
import styles from "./AddArtistButton.scss";

const cn = classNames.bind(styles);

type TAddArtistButton = {
  isAuthorized?: boolean;
  isDarkTheme?: boolean;
};

const AddArtistButton: FC<TAddArtistButton> = ({
  isAuthorized,
  isDarkTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isAuthorized && (
        <div className="addArtistWrapper">
          <div
            className="addArtistWrapper__button"
            onClick={() => {
              setIsOpen(true);
            }}
            aria-hidden
          >
            <div
              className={cn("addArtistWrapper__plus", {
                addArtistWrapper__plus_dark: isDarkTheme,
              })}
            >
              <Plus />
            </div>
            <Button isOutlined isDarkTheme={isDarkTheme}>
              {"add artist"}
            </Button>
          </div>
        </div>
      )}
      <AddEditAuthor
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
};

export default AddArtistButton;
