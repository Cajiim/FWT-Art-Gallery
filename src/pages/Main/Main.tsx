import { FC, useContext, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/useReduxHooks";
import { CardGrid } from "../../ui/CardGrid";
import { fetchAuthors } from "../../redux/thunk/fetchDataThunk";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AddArtistButton } from "../../components/AddArtistButton";
import { ThemeContext } from "../../context";
import type { TTheme } from "../../types";
import "./Main.scss";

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { toggle } = useContext<TTheme>(ThemeContext);
  const { dataAuthors } = useAppSelector(({ data }) => data);
  const { chosenTheme } = useAppSelector(({ currTheme }) => currTheme);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  return (
    <div className="main-wrapper">
      <Header
        isDarkTheme={chosenTheme.dark === "false" ? true : false}
        toggle={toggle}
        isAuthorized={false}
      />
      <main className="main-wrapper__content">
        <AddArtistButton
          isAuthorized={false}
          isDarkTheme={chosenTheme.dark === "false" ? true : false}
        />
        <CardGrid
          arr={dataAuthors}
          isDarkTheme={chosenTheme.dark === "false" ? true : false}
        />
      </main>
      <div className="main-wrapper__footer">
        <Footer isDarkTheme={chosenTheme.dark === "false" ? true : false} />
      </div>
    </div>
  );
};

export default Main;
