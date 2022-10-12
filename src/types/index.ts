import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  HTMLAttributes,
} from "react";

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
  isOutlined?: boolean;
  isDarkTheme?: boolean;
};

export type TCardGrid = HTMLAttributes<HTMLElement> & {
  paintings: [
    {
      id: string;
      name: string;
      img: string;
      year: string;
    }
  ];
  isDarkTheme?: boolean;
};

export type TCheckbox = InputHTMLAttributes<HTMLInputElement> & {
  isDarkTheme?: boolean;
};

export type TInput = InputHTMLAttributes<HTMLInputElement> & {
  isDarkTheme?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export type TLabel = LabelHTMLAttributes<HTMLLabelElement> & {
  isDarkTheme?: boolean;
  isVisible?: boolean;
};

export type TLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  isDarkTheme?: boolean;
};

export type TToast = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme?: boolean;
};

export type TLoader = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme?: boolean;
};
