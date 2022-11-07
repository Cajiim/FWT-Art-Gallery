import { FC, useState } from "react";
import classNames from "classnames";
import type { TTheme } from "../../types";
import { Logo } from "../Logo";
import { MenuItem } from "../../ui/MenuItem";
import { ThemeIcon } from "../../ui/ThemeIcon";
import { Menu } from "../Modals/Menu";
import { AuthModal } from "../Modals/AuthModal";
import styles from "./Header.scss";

const cn = classNames.bind(styles);

type THeader = TTheme & {
  isAuthorized: boolean;
  isAuthorPage?: boolean;
};

const Header: FC<THeader> = ({
  isDarkTheme,
  toggle,
  isAuthorized,
  isAuthorPage,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isLogIn, setIsLogIn] = useState<boolean>(true);
  const handlClickBurger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={cn("header", {
        header_guest: !isAuthorized && !isAuthorPage,
      })}
    >
      <Logo isDarkTheme={isDarkTheme} />
      <nav className="header__navigation">
        {!isAuthorized ? (
          <div className="header__buttons">
            <MenuItem
              onClick={() => {
                setIsAuthOpen(!isAuthOpen);
                setIsLogIn(true);
              }}
              isDarkTheme={isDarkTheme}
            >
              {"log in"}
            </MenuItem>
            <MenuItem
              onClick={() => {
                setIsAuthOpen(!isAuthOpen);
                setIsLogIn(false);
              }}
              isDarkTheme={isDarkTheme}
            >
              {"sign up"}
            </MenuItem>
          </div>
        ) : (
          <div className="header__buttons">
            <MenuItem isDarkTheme={isDarkTheme} onClick={() => {}}>
              {"Log Out"}
            </MenuItem>
          </div>
        )}
        <ThemeIcon isDarkTheme={isDarkTheme} onClick={toggle} />
      </nav>
      <li
        className={cn("header__menu", {
          header__menu_open: isOpen,
          header__menu_dark: isDarkTheme,
        })}
        onClick={handlClickBurger}
      >
        <span />
      </li>
      <Menu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDarkTheme={isDarkTheme}
        onClick={toggle}
      />
      <AuthModal
        isLogIn={isLogIn}
        setIsLogIn={setIsLogIn}
        isAuthOpen={isAuthOpen}
        setIsAuthOpen={setIsAuthOpen}
        isDarkTheme={isDarkTheme}
      />
    </header>
  );
};

export default Header;
