import { FC, useContext } from "react";
import type { TTheme } from "../../types";
import { Layout } from "../../components/Layout";
import { CardGrid } from "../../ui/CardGrid";
import { ThemeContext } from "../../context";
import { arr } from "../../data";

const Main: FC = () => {
  const { theme } = useContext<TTheme>(ThemeContext);
  return (
    <Layout>
      <CardGrid paintings={arr} isDarkTheme={theme === "dark" ? true : false} />
    </Layout>
  );
};

export default Main;
