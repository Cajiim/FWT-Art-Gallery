import { FC } from "react";
import type { TToast } from "../../types";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIconLarge.svg";
import { ReactComponent as Error } from "../../assets/img/error.svg";
import classNames from "classnames";
import styles from "./Toast.scss";
const cn = classNames.bind(styles);

const Toast: FC<TToast> = ({ children, ...other }) => {
  return (
    <div
      className={cn("toast", {
        toast_dark: other.isDarkTheme,
      })}
    >
      <div className="toast__container">
        <span className="toast__jaw" />
        <div className="toast__errorIcon">
          <Error />
        </div>
        <div className="toast__errorMessage">
          <p className="toast__error">Error!</p>
          <p
            className={cn("toast__errorText", {
              toast__errorText_dark: other.isDarkTheme,
            })}
          >
            {children}
          </p>
        </div>
        <div
          className={cn("toast__closeIcon", {
            toast__closeIcon_dark: other.isDarkTheme,
          })}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default Toast;
