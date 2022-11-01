import { FC, useContext } from "react";
import type { TTheme } from "../../types";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { CardGrid } from "../../ui/CardGrid";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ThemeContext } from "../../context";
import "./Main.scss";

const Main: FC = () => {
  const { toggle } = useContext<TTheme>(ThemeContext);
  const { chosenTheme } = useAppSelector(({ currTheme }) => currTheme);
  return (
    <div className="main-wrapper">
      <Header
        isDarkTheme={chosenTheme.dark === "false" ? true : false}
        toggle={toggle}
        isAuthorized={false}
      />
      <main className="main-wrapper__content">
        <CardGrid
          isDarkTheme={chosenTheme.dark === "false" ? true : false}
          isAuthorized
        />
      </main>
      <div className="main-wrapper__footer">
        <Footer isDarkTheme={chosenTheme.dark === "false" ? true : false} />
      </div>
    </div>
  );
};

export default Main;
