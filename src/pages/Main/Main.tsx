import { FC, useContext } from "react";
import type { TTheme } from "../../types";
import { CardGrid } from "../../ui/CardGrid";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ThemeContext } from "../../context";
import { arr } from "../../data";
import "./Main.scss";

const Main: FC = () => {
  const { theme, toggle } = useContext<TTheme>(ThemeContext);
  return (
    <div className="main-wrapper">
      <Header isDarkTheme={theme === "dark" ? true : false} toggle={toggle} />
      <main className="main-wrapper__content">
        <CardGrid
          paintings={arr}
          isDarkTheme={theme === "dark" ? true : false}
        />
      </main>
      <div className="main-wrapper__footer">
        <Footer isDarkTheme={theme === "dark" ? true : false} />
      </div>
    </div>
  );
};

export default Main;
