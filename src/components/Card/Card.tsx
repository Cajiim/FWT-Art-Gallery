import { FC } from "react";
import classNames from "classnames";
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
    <img src={img} alt="card__painting">
      <div
        className={cn("card__curtain", {
          card__curtain_dark: isDarkTheme,
        })}
      >
        <span
          className={cn("card__arrow", {
            card__arrow_dark: isDarkTheme,
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
      </div>
    </img>
  );
};

export default Card;
