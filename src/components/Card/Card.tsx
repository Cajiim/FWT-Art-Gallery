import { FC } from "react";
import classNames from "classnames";
import { ReactComponent as CardArrow } from "../../assets/img/cardArrow.svg";
import styles from "./Card.scss";
const cn = classNames.bind(styles);

type TCard = {
  name: string;
  img: string;
  year: string;
  isDarkTheme?: boolean;
};

const Card: FC<TCard> = ({ name, img, year, isDarkTheme }) => {
  return (
    <div className="card">
      <div
        className={cn("card__curtain", {
          card__curtain_dark: isDarkTheme,
        })}
      >
        <span
          className={cn("card__band", {
            card__band_dark: isDarkTheme,
          })}
        />
        <div>
          <p
            className={cn("card__name", {
              card__name_dark: isDarkTheme,
            })}
          >
            {name}
          </p>
          <p
            className={cn("card__year", {
              card__year_dark: isDarkTheme,
            })}
          >
            {year}
          </p>
        </div>
        <div className="card__rectangle">
          <CardArrow className="card__arrow" />
        </div>
      </div>
      <img src={img} alt="painting" className="card__painting" />
    </div>
  );
};

export default Card;
