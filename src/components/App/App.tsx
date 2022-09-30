import { FC, useState, useEffect } from "react";
import { Main } from "../../pages/Main";
import { ThemeContext, defaultContext } from "../../context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);
  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const providerProps = () => ({ theme, toggle });

  useEffect(() => {
    const isDarkTheme =
      theme === "dark"
        ? document.body.classList.add("darkTheme")
        : document.body.classList.remove("darkTheme");
    return () => isDarkTheme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={providerProps()}>
      <Router>
        <Routes>
          <Route path="/FWT-Art-Gallery" element={<Main />}></Route>
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
