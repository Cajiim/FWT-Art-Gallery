import { FC } from "react";
import classNames from "classnames";
import { Facebook } from "../../ui/Facebook";
import { Instagram } from "../../ui/Instagram";
import { Vk } from "../../ui/Vk";
import { Link } from "../../ui/Link";
import styles from "./Footer.scss";
const cn = classNames.bind(styles);

type TFooter = {
  isDarkTheme?: boolean;
  other?: HTMLElement;
};

const Footer: FC<TFooter> = ({ ...other }) => {
  return (
    <footer
      className={cn("footer", {
        footer_dark: other.isDarkTheme,
      })}
    >
      <div
        className={cn("footer__text", {
          footer__text_dark: other.isDarkTheme,
        })}
      >
        <p>Проект реализован в рамках стажировки</p>
        <p>
          для Frontend-разработчиков от компании &nbsp;
          <Link link="https://framework.team/" isDarkTheme={other.isDarkTheme}>
            Framework Team
          </Link>
          &nbsp;
        </p>
        <p className="footer__author">Петров Александр, 2022</p>
      </div>
      <div className="footer__social">
        <Facebook isDarkTheme={other.isDarkTheme} />
        <Vk isDarkTheme={other.isDarkTheme} />
        <Instagram isDarkTheme={other.isDarkTheme} />
      </div>
    </footer>
  );
};

export default Footer;
