import { FC } from "react";
import { Card } from "../../components/Card";
import type { TCardGrid } from "../../types";
import "./CardGrid.scss";

const CardGrid: FC<TCardGrid> = ({ paintings, isDarkTheme }) => {
  return (
    <ul className="cardGrid">
      {paintings.map(({ id, name, img, year }) => (
        <li className="cardGrid__item" key={id}>
          <Card name={name} img={img} year={year} isDarkTheme={isDarkTheme} />
        </li>
      ))}
    </ul>
  );
};

export default CardGrid;
