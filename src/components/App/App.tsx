import { FC, useState, useEffect } from "react";
import { Main } from "../../pages/Main";
import { AuthorPage } from "../../pages/AuthorPage";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { changeTheme } from "../../redux/reducers/reducerTheme";
import { useCookies } from "react-cookie";
import { ThemeContext, defaultContext } from "../../context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const [theme, setTheme] = useState(defaultContext.theme);
  const [coockies, setCookie] = useCookies(["dark"]);
  const { chosenTheme } = useAppSelector(({ currTheme }) => currTheme);
  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "dark") setCookie("dark", true);
    if (theme !== "dark") setCookie("dark", false);
  };
  const providerProps = () => ({ theme, toggle });

  useEffect(() => {
    const isDarkTheme =
      theme === "dark" || coockies.dark === "false"
        ? document.body.classList.add("darkTheme")
        : document.body.classList.remove("darkTheme");
    dispatch(changeTheme(coockies));
    setTheme(chosenTheme.dark === "false" ? "dark" : "light");
    return () => isDarkTheme;
  }, [chosenTheme.dark, coockies, dispatch, theme]);

  return (
    <ThemeContext.Provider value={providerProps()}>
      <Router>
        <Routes>
          <Route path="/FWT-Art-Gallery" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/FWT-Art-Gallery/author" element={<AuthorPage />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
