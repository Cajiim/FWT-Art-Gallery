import { HTMLAttributes, ReactNode, Dispatch } from "react";

export type TButton = HTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
  isOutlined?: boolean;
  isDarkTheme?: boolean;
  size?: string;
};

export type TCardGrid = {
  paintings?: {
    id: string;
    name: string;
    img: string;
    year: string;
  }[];
  isDarkTheme?: boolean;
};

export type TCheckbox = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme?: boolean;
  arrGenres: ReactNode[];
  setArrGenres: Dispatch<React.SetStateAction<ReactNode[]>>;
};

export type TInput = HTMLAttributes<HTMLInputElement> & {
  isDarkTheme?: boolean;
  isError?: boolean;
  errorMessage?: string;
  type?: string;
  name?: string;
  value?: string;
};

export type TLabel = {
  children?: ReactNode;
  className?: string;
  other?: HTMLAnchorElement;
  isDarkTheme?: boolean;
  isVisible?: boolean;
  onClick?: () => void;
};

export type TLink = {
  link: string;
  children: ReactNode;
  other?: HTMLAnchorElement;
  isDarkTheme?: boolean;
  className?: string;
};

export type TToast = {
  children: string;
  isDarkTheme?: boolean;
};

export type TLoader = {
  isDarkTheme?: boolean;
  other?: HTMLAnchorElement;
};

export type TTheme = {
  isDarkTheme?: boolean;
  theme?: "dark" | "light";
  toggle?: () => void;
};

export type TAuthors = {
  genres?: [string];
  _id?: string;
  name?: string;
  description?: string;
  yearsOfLife?: string;
  mainPainting?: {
    _id: string;
    name: string;
    yearOfCreation: string;
    image: { _id: string; src: string; original: string };
  };

  isDarkTheme?: boolean;
};
