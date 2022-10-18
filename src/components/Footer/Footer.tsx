import { FC } from "react";
import classNames from "classnames";
import { ReactComponent as Facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/img/inst.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { Link } from "../../ui/Link";
import styles from "./Footer.scss";
const cn = classNames.bind(styles);

type TFooter = {
  isDarkTheme?: boolean;
  other?: HTMLElement;
};

const Footer: FC<TFooter> = ({ ...other }) => {
  return (
    <footer className="footer">
      <div
        className={cn("footer__text", {
          footer__text_dark: other.isDarkTheme,
        })}
      >
        <p>Проект реализован в рамках стажировки</p>
        <p>
          {"для Frontend-разработчиков от компании "}
          <Link link="https://framework.team/" isDarkTheme={other.isDarkTheme}>
            Framework Team
          </Link>
          &nbsp;
        </p>
        <p className="footer__author">Петров Александр, 2022</p>
      </div>
      <div className="footer__social">
        <Link
          link={"https://www.facebook.com/framework.team"}
          isDarkTheme={other.isDarkTheme}
          className={"link__social"}
        >
          <Facebook />
        </Link>
        <Link
          link={"https://vk.com/frameworkteam"}
          isDarkTheme={other.isDarkTheme}
          className={"link__social"}
        >
          <Vk />
        </Link>
        <Link
          link={"https://www.instagram.com/framework.team/"}
          isDarkTheme={other.isDarkTheme}
          className={"link__social"}
        >
          <Instagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
