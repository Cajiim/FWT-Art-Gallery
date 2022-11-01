import { FC, Dispatch } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";
import { ReactComponent as CloseIcon } from "../../../assets/img/closeIcon.svg";
import LogInImg from "../../../assets/img/logIn.png";
import SignUpImg from "../../../assets/img/signUp.png";
import styles from "./AuthModal.scss";

const cn = classNames.bind(styles);

type TAuthModal = {
  isLogIn: boolean;
  setIsLogIn: Dispatch<React.SetStateAction<boolean>>;
  isAuthOpen: boolean;
  setIsAuthOpen: Dispatch<React.SetStateAction<boolean>>;
  isDarkTheme?: boolean;
};

const AuthModal: FC<TAuthModal> = ({
  isLogIn,
  setIsLogIn,
  isAuthOpen,
  setIsAuthOpen,
  isDarkTheme,
}) => {
  return createPortal(
    <div
      className={cn("auth", {
        auth_open: isAuthOpen,
        auth_dark: isDarkTheme,
      })}
      onClick={() => setIsAuthOpen(false)}
      aria-hidden
    >
      <div
        className={cn("auth__contentWrapper", {
          auth__contentWrapper_dark: isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
        aria-hidden
      >
        <div className="auth__imgWrapper">
          <img
            src={isLogIn ? LogInImg : SignUpImg}
            alt="authImg"
            className="auth__img"
          />
        </div>
        <div
          className={cn("auth__content", {
            auth__content_dark: isDarkTheme,
          })}
        >
          <div
            className="auth__closeIcon"
            onClick={() => setIsAuthOpen(false)}
            aria-hidden
          >
            <CloseIcon />
          </div>
          <h2
            className={cn("auth__title", {
              auth__title_dark: isDarkTheme,
            })}
          >
            {isLogIn ? "Welcome back" : "Create your profile"}
          </h2>
          <div className="auth__info">
            <p
              className={cn("auth__explanation", {
                auth__explanation_dark: isDarkTheme,
              })}
            >
              {isLogIn
                ? "If you don`t have an account yet, please"
                : "If you already have an account, please "}
            </p>
            &nbsp;
            <Button
              isOutlined
              isDarkTheme={isDarkTheme}
              className="button__auth"
              onClick={
                isLogIn ? () => setIsLogIn(false) : () => setIsLogIn(true)
              }
            >
              {isLogIn ? "sign up" : "log in"}
            </Button>
          </div>
          <div className="auth__input">
            <Input isDarkTheme={isDarkTheme}>Email</Input>
            <Input isDarkTheme={isDarkTheme}>Password</Input>
          </div>
          <Button isDarkTheme={isDarkTheme}>
            {isLogIn ? "Log in" : "Sign up"}
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AuthModal;
