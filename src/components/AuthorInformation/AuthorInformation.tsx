import { FC } from "react";
import { Accordion } from "../../ui/Accordion";
import { Button } from "../../ui/Button";
import { ReactComponent as Arrow } from "../../assets/img/authorArrow.svg";
import classNames from "classnames";
import styles from "./AuthorInformation.scss";

const cn = classNames.bind(styles);

type TAuthorInformation = {
  isDarkTheme?: boolean;
};

const AuthorInformation: FC<TAuthorInformation> = ({ ...args }) => {
  const { isDarkTheme } = args;
  const data = {
    yearsOfLife: "29 july 1800 - 2 may 1900",
    country: "Feodosia, Russian Empire",
    name: "Ivan Aivazovsky",
    description:
      'Ivan Konstantinovich Aivazovsky was a Russian Romantic painter who is considered one of the greatest masters of marine art. Baptized as Hovhannes Aivazian, he was born into an Armenian family in the Black Sea port of Feodosia in Crimea and was mostly based there Following his education at the Imperial Academy of Arts in Saint Petersburg, Aivazovsky traveled to Europe and lived briefly in Italy in the early 1840s. He then returned to Russia and was appointed the main painter of the Russian Navy. Aivazovsky had close ties with the military and political elite of the Russian Empire and often attended military maneuvers. He was sponsored by the state and was well-regarded during his lifetime. The saying "worthy of Aivazovsky s brush, popularized by Anton Chekhov, was used in Russia for describing something lovely. He remains highly popular in Russia in the 21st century, One of the most prominent Russian artists of his time, Aivazovsky was also popular outside Russian Empire. He held numerous solo exhibitions in Europe and the United States. During his almost 60-year career, he created around 6,000 paintings, making him one of the most prolific artists of his time. The vast majority of his works are seascapes, but he often depicted battle scenes, Armenian themes, and portraiture. Most of Aivazovsky s works are kept in Russian, Ukrainian and Armenian museums as well as private collections.',
    genres: ["Romanticism", "Realistic", "Art", "Nature", "Bataille"],
    id: "1",
  };

  return (
    <div
      className={cn("author", {
        author_dark: isDarkTheme,
      })}
    >
      <div className="author__backButton">
        <div className="author__arrow">
          <Arrow fill={!isDarkTheme ? "#575757" : "#DEDEDE"} />
        </div>
        <Button isOutlined={true} onClick={() => {}} isDarkTheme={isDarkTheme}>
          {"back"}
        </Button>
      </div>
      <img
        src="https://www.figma.com/file/UHg2LdpfSoM8XBrzrqocs6/image/f9083c0b624bb08c9a12c4c2ce6c5bd2d14667a6?fuid=1151076368311196868"
        alt="authorImg"
        className="author__img"
      />
      <div className="author__accordionWrapper">
        <Accordion data={data} isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
};

export default AuthorInformation;
