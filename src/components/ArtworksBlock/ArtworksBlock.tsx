import { FC, useState } from "react";
import classNames from "classnames";
import { ReactComponent as Plus } from "../../assets/img/plus.svg";
import { Button } from "../../ui/Button";
import { AddEditPaining } from "../Modals/AddEditPainting";
import styles from "./ArtworksBlock.scss";

const cn = classNames.bind(styles);

type TArtworksBlock = {
  isDarkTheme?: boolean;
  isAuthorized?: boolean;
};

const ArtworksBlock: FC<TArtworksBlock> = ({ isDarkTheme, isAuthorized }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={cn("artworksBlock__artworksWrapper", {
        artworksBlock__artworksWrapper_auth: isAuthorized,
      })}
    >
      <h1
        className={cn("artworksBlock__artworks", {
          artworksBlock__artworks_dark: isDarkTheme,
        })}
      >
        Artworks
      </h1>
      {isAuthorized && (
        <div
          className="artworksBlock__addPicture"
          onClick={() => setIsOpen(true)}
          aria-hidden
        >
          <div
            className={cn("artworksBlock__plusIcon", {
              artworksBlock__plusIcon_dark: isDarkTheme,
            })}
          >
            <Plus />
          </div>
          <Button isOutlined isDarkTheme={isDarkTheme}>
            Add Picture
          </Button>
        </div>
      )}
      <AddEditPaining
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};

export default ArtworksBlock;
