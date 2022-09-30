import { createContext } from "react";
import type { TTheme } from "../types";

export const defaultContext: TTheme = {
  theme: "light",
};

export const ThemeContext = createContext<TTheme>(defaultContext);
