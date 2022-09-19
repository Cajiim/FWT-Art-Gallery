import { FC } from "react";
import { Card } from "../../components/Card";
import "./CardGrid.scss";

export type TCardGrid = {
  paintings: [
    {
      id: string;
      name: string;
      img: string;
      year: string;
    }
  ];
  isDarkTheme?: boolean;
};

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
