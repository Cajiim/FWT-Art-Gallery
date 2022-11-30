import { FC } from "react";
import classNames from "classnames";
import DropIcon from "../../../assets/img/dropIcon.svg";
import styles from "./DropArea.scss";

const cn = classNames.bind(styles);
type TDropArea = {
  isDarkTheme?: boolean;
};

const DropArea: FC<TDropArea> = ({ isDarkTheme }) => {
  return (
    <div
      className={cn("dropArea__dropWindow", {
        dropArea__dropWindow_dark: isDarkTheme,
      })}
      onClick={(e) => e.stopPropagation()}
      aria-hidden
    >
      <img
        className={cn("dropArea__image", {
          dropArea__image_dark: isDarkTheme,
        })}
        alt="dropIcon"
        src={DropIcon}
      />
      <p
        className={cn("dropArea__text", {
          dropArea__text_dark: isDarkTheme,
        })}
      >
        Drop your image here
      </p>
      <p
        className={cn("dropArea__rules", {
          dropArea__rules_dark: isDarkTheme,
        })}
      >
        Upload only .jpg or .png format less than 3 MB
      </p>
    </div>
  );
};

export default DropArea;
