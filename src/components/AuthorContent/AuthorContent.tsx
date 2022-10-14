import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { AuthorInformation } from "../AuthorInformation";
import { CardGrid } from "../../ui/CardGrid";
import styles from "./AuthorContent.scss";

const cn = classNames.bind(styles);

type TAuthorContent = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme: boolean;
};

const AuthorContent: FC<TAuthorContent> = ({ ...args }) => {
  const { isDarkTheme } = args;
  return (
    <>
      <AuthorInformation isDarkTheme={isDarkTheme} />
      <h1
        className={cn("authorContent__artworks", {
          authorContent__artworks_dark: isDarkTheme,
        })}
      >
        Artworks
      </h1>
      <CardGrid isDarkTheme={isDarkTheme} />
    </>
  );
};

export default AuthorContent;
