import { FC } from "react";

import { baseURL } from "../../api";
import type { TAuthors } from "../../types";
import { Card } from "../../components/Card";
import "./CardGrid.scss";

type TCardGrid = {
  arr: TAuthors[];
  isDarkTheme: boolean;
};

const CardGrid: FC<TCardGrid> = ({ arr, isDarkTheme }) => {
  return (
    <ul className="cardGrid">
      {arr.map(({ _id, name, mainPainting, yearsOfLife }) => (
        <li className="cardGrid__item" key={_id}>
          <Card
            name={name}
            img={`${baseURL}${mainPainting?.image.src}`}
            year={yearsOfLife}
            isDarkTheme={isDarkTheme}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardGrid;
