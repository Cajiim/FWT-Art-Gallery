import { FC } from "react";
import classNames from "classnames";
import type { TAuthors } from "../../types";
import { Card } from "../../components/Card";
import { Button } from "../Button";
import { ReactComponent as Plus } from "../../assets/img/plus.svg";
import { arr } from "../../data";
import styles from "./CardGrid.scss";

const cn = classNames.bind(styles);

type TCardGrid = TAuthors & {
  isAuthorized?: boolean;
};

const CardGrid: FC<TCardGrid> = ({ isDarkTheme, isAuthorized }) => {
  return (
    <>
      {isAuthorized ? (
        <div className="cardGrid__buttonWrapper">
          <div className="cardGrid__button">
            <div
              className={cn("cardGrid__plus", {
                cardGrid__plus_dark: isDarkTheme,
              })}
            >
              <Plus />
            </div>
            <Button isOutlined isDarkTheme={isDarkTheme}>
              {"add artist"}
            </Button>
          </div>
        </div>
      ) : null}
      <ul className="cardGrid">
        {arr.map(({ id, name, img, year }) => (
          <li className="cardGrid__item" key={id}>
            <Card name={name} img={img} year={year} isDarkTheme={isDarkTheme} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardGrid;
