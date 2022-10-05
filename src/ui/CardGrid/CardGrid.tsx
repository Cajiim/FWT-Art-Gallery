import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { fetchAuthors } from "../../redux/thunk/fetchDataThunk";
import { Card } from "../../components/Card";
import { Loader } from "../Loader";
import type { TAuthors } from "../../types";
import "./CardGrid.scss";

const CardGrid: FC<TAuthors> = ({ isDarkTheme }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);
  const { dataAuthors, isLoading } = useAppSelector(({ data }) => data);
  return (
    <ul className="cardGrid">
      {!isLoading ? (
        dataAuthors.map(({ _id, name, mainPainting, yearsOfLife }) => (
          <li className="cardGrid__item" key={_id}>
            <Card
              name={name}
              img={mainPainting?.image?.original}
              yearsOfLife={yearsOfLife}
              isDarkTheme={isDarkTheme}
            />
          </li>
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default CardGrid;
