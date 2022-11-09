import { FC, Dispatch, useState } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import {
  handlChangeEmail,
  handlChangePassword,
  handlClickBlur,
} from "../../../utils/getAuthValidation";
import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";
import { CloseIcon } from "../../../ui/CloseIcon";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );

  return createPortal(
    <div
      className={cn("auth", {
        auth_open: isAuthOpen,
        auth_dark: isDarkTheme,
      })}
      onClick={() => setIsAuthOpen(false)}
      aria-hidden
    >
      <form
        className={cn("auth__contentWrapper", {
          auth__contentWrapper_dark: isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
        aria-hidden
        method="POST"
      >
        <img
          src={isLogIn ? LogInImg : SignUpImg}
          alt="authImg"
          className="auth__img"
        />
        <div
          className={cn("auth__content", {
            auth__content_dark: isDarkTheme,
          })}
        >
          <CloseIcon
            className="closeIcon__auth"
            isVisible
            onClick={() => setIsAuthOpen(false)}
            isDarkTheme={isDarkTheme}
          />
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
              className="button__inline"
              onClick={
                isLogIn ? () => setIsLogIn(false) : () => setIsLogIn(true)
              }
            >
              {isLogIn ? "sign up" : "log in"}
            </Button>
          </div>
          <div className="auth__input">
            <Input
              isDarkTheme={isDarkTheme}
              name={"email"}
              value={email}
              onChange={(e) => handlChangeEmail(e, setEmail, setEmailError)}
              onBlur={(e) => handlClickBlur(e, setEmailDirty, setPasswordDirty)}
              isError={emailDirty && emailError !== ""}
              errorMessage={emailError}
            >
              Email
            </Input>
            <Input
              isDarkTheme={isDarkTheme}
              name={"password"}
              value={password}
              onChange={(e) =>
                handlChangePassword(e, setPassword, setPasswordError)
              }
              onBlur={(e) => handlClickBlur(e, setEmailDirty, setPasswordDirty)}
              type="password"
              isError={passwordDirty && passwordError !== ""}
              errorMessage={passwordError}
            >
              Password
            </Input>
          </div>
          <Button isDarkTheme={isDarkTheme}>
            {isLogIn ? "Log in" : "Sign up"}
          </Button>
        </div>
      </form>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AuthModal;
