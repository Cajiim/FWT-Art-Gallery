import { FC } from "react";
import type { TAuthors } from "../../types";
import { Card } from "../../components/Card";
import { arr } from "../../data";
import "./CardGrid.scss";

type TCardGrid = TAuthors & {
  isAuthorized?: boolean;
  isMainPage?: boolean;
};

const CardGrid: FC<TCardGrid> = ({ isDarkTheme }) => {
  return (
    <>
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
