import { FC, useState } from "react";
import classNames from "classnames";
import type { TTheme } from "../../types";
import { Logo } from "../Logo";
import { Button } from "../../ui/Button";
import { ThemeIcon } from "../../ui/ThemeIcon";
import { Menu } from "../Modals/Menu";
import styles from "./Header.scss";
const cn = classNames.bind(styles);

const Header: FC<TTheme> = ({ isDarkTheme, toggle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlClickBurger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={cn("header", {
        header_dark: isDarkTheme,
      })}
    >
      <Logo isDarkTheme={isDarkTheme} />
      <nav className="header__navigation">
        <div className="header__buttons">
          <Button
            onClick={() => {}}
            isOutlined={true}
            className="button_noUnderline"
            size="medium"
            isDarkTheme={isDarkTheme}
          >
            {"log in"}
          </Button>
          <Button
            onClick={() => {}}
            isOutlined={true}
            className="button_noUnderline"
            size="medium"
            isDarkTheme={isDarkTheme}
          >
            {"sign up"}
          </Button>
        </div>
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
    </header>
  );
};

export default Header;
