import { FC, ReactNode, useContext } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ThemeContext } from "../../context";
import type { TTheme } from "../../types";
import "./Layout.scss";

type TLayout = {
  children: ReactNode;
};

const Layout: FC<TLayout> = ({ children }) => {
  const { theme, toggle } = useContext<TTheme>(ThemeContext);
  return (
    <div className="layout-wrapper">
      <Header isDarkTheme={theme === "dark" ? true : false} toggle={toggle} />
      <main className="layout-wrapper__content">{children}</main>
      <div className="layout-wrapper__footer">
        <Footer isDarkTheme={theme === "dark" ? true : false} />
      </div>
    </div>
  );
};

export default Layout;
