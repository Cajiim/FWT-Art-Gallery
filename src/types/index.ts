export type TButton = {
  className: string;
  children: string;
  onClick: () => void;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isDarkTheme?: boolean;
  other: HTMLButtonElement;
};

export type TCardGrid = {
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

export type TCheckbox = {
  className?: string;
  id?: string;
  other?: HTMLInputElement;
  isDarkTheme?: boolean;
};

export type TInput = {
  className: string;
  other: HTMLInputElement;
  isDarkTheme?: boolean;
  isError?: boolean;
  placeholder?: string;
  errorMessage?: string;
};

export type TLabel = {
  children: string;
  className: string;
  other: HTMLAnchorElement;
  isDarkTheme?: boolean;
  isVisible?: boolean;
};

export type TLink = {
  link: string;
  children: string;
  other: HTMLAnchorElement;
  isDarkTheme?: boolean;
  className?: string;
};
