import { FC, useContext } from "react";
import type { TTheme } from "../../types";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { AuthorContent } from "../../components/AuthorContent";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ThemeContext } from "../../context";
import "./AuthorPage.scss";

const AuthorPage: FC = () => {
  const { toggle } = useContext<TTheme>(ThemeContext);
  const { chosenTheme } = useAppSelector(({ currTheme }) => currTheme);
  return (
    <div className="main-wrapper">
      <Header
        isDarkTheme={chosenTheme.dark === "false" ? true : false}
        toggle={toggle}
        isAuthorized={false}
        isAuthorPage
      />
      <main className="main-wrapper__content">
        <AuthorContent
          isDarkTheme={chosenTheme.dark === "false" ? true : false}
          isAuthorized={false}
        />
      </main>
      <div className="main-wrapper__footer">
        <Footer isDarkTheme={chosenTheme.dark === "false" ? true : false} />
      </div>
    </div>
  );
};

export default AuthorPage;
