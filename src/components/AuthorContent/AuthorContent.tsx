import { FC, HTMLAttributes } from "react";
import { AuthorInformation } from "../AuthorInformation";
import { ArtworksBlock } from "../ArtworksBlock";
import { CardGrid } from "../../ui/CardGrid";

type TAuthorContent = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme: boolean;
  isAuthorized: boolean;
};

const AuthorContent: FC<TAuthorContent> = ({ ...args }) => {
  const { isDarkTheme, isAuthorized } = args;
  return (
    <>
      <AuthorInformation
        isDarkTheme={isDarkTheme}
        isAuthorized={isAuthorized}
      />
      <ArtworksBlock isDarkTheme={isDarkTheme} isAuthorized={isAuthorized} />
      <CardGrid isDarkTheme={isDarkTheme} />
    </>
  );
};

export default AuthorContent;
