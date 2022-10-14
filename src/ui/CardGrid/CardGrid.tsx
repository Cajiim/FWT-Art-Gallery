import { FC } from "react";
import { Card } from "../../components/Card";
import { arr } from "../../data";
import type { TAuthors } from "../../types";
import "./CardGrid.scss";

const CardGrid: FC<TAuthors> = ({ isDarkTheme }) => {
  return (
    <ul className="cardGrid">
      {arr.map(({ id, name, img, year }) => (
        <li className="cardGrid__item" key={id}>
          <Card name={name} img={img} year={year} isDarkTheme={isDarkTheme} />
        </li>
      ))}
    </ul>
  );
};

export default CardGrid;
