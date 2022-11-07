import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { ReactComponent as Plus } from "../../assets/img/plus.svg";
import { AuthorInformation } from "../AuthorInformation";
import { CardGrid } from "../../ui/CardGrid";
import { Button } from "../../ui/Button";
import styles from "./AuthorContent.scss";

const cn = classNames.bind(styles);

type TAuthorContent = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme: boolean;
  isAuthorized: boolean;
};

const AuthorContent: FC<TAuthorContent> = ({ isAuthorized, ...args }) => {
  const { isDarkTheme } = args;
  return (
    <>
      <AuthorInformation
        isDarkTheme={isDarkTheme}
        isAuthorized={isAuthorized}
      />
      <div
        className={cn("authorContent__artworksWrapper", {
          authorContent__artworksWrapper_auth: isAuthorized,
        })}
      >
        <h1
          className={cn("authorContent__artworks", {
            authorContent__artworks_dark: isDarkTheme,
          })}
        >
          Artworks
        </h1>
        {isAuthorized && (
          <div className="authorContent__addPicture">
            <div
              className={cn("authorContent__plusIcon", {
                authorContent__plusIcon_dark: isDarkTheme,
              })}
            >
              <Plus />
            </div>
            <Button isOutlined isDarkTheme={isDarkTheme}>
              Add Picture
            </Button>
          </div>
        )}
      </div>
      <CardGrid isDarkTheme={isDarkTheme} />
    </>
  );
};

export default AuthorContent;
