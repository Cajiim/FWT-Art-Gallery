import { FC } from "react";
import classNames from "classnames";
import { Button } from "../../../ui/Button";
import { ThemeIcon } from "../../../ui/ThemeIcon";
import styles from "./Menu.scss";
const cn = classNames.bind(styles);

type TMenu = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  onClick?: () => void;
  isDarkTheme?: boolean;
  other?: HTMLDivElement;
};

const Menu: FC<TMenu> = ({ isOpen, onClick, setIsOpen, ...other }) => {
  return (
    <div
      className={cn("menu", {
        menu_open: isOpen,
        menu_dark: other.isDarkTheme,
      })}
      onClick={() => setIsOpen(!isOpen)}
      aria-hidden
    >
      <div
        className={cn("menu__content", {
          menu__content_open: isOpen,
          menu__content_dark: other.isDarkTheme,
        })}
        onClick={(e) => e.stopPropagation()}
        aria-hidden
      >
        <div className="menu__sideContent">
          <div className="menu__theme" onClick={onClick} aria-hidden>
            <ThemeIcon isDarkTheme={other.isDarkTheme} />
            <Button
              isDarkTheme={other.isDarkTheme}
              isOutlined={true}
              onClick={() => {}}
            >
              {other.isDarkTheme ? "light mode" : "dark mode"}
            </Button>
          </div>
          <div className="menu__authorization">
            <Button
              onClick={() => {}}
              isDarkTheme={other.isDarkTheme}
              isOutlined={true}
              className="button_noUnderline"
              size="large"
            >
              {"Log In"}
            </Button>
            <Button
              onClick={() => {}}
              isDarkTheme={other.isDarkTheme}
              isOutlined={true}
              className="button_noUnderline"
              size="large"
            >
              {"Sign Up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
