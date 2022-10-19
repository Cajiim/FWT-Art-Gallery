import { FC, HTMLAttributes, useState } from "react";
import { Button } from "../Button";
import { Label } from "../Label";
import { Arrow } from "../Arrow";
import classNames from "classnames";
import styles from "./Accordion.scss";

const cn = classNames.bind(styles);

type TAccordion = HTMLAttributes<HTMLDivElement> & {
  data: {
    id: string;
    yearsOfLife: string;
    country: string;
    name: string;
    description: string;
    genres: string[];
  };
  isDarkTheme?: boolean;
};

const Accordion: FC<TAccordion> = ({ className, ...args }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isDarkTheme } = args;
  const { yearsOfLife, country, name, description, genres } = data;
  return (
    <div
      className={cn("accordion", className, {
        accordion_dark: isDarkTheme,
        accordion_open: isOpen,
      })}
    >
      {/*  <div className="accordion__authorInfoWrapper"> */}
      <div
        className={cn("accordion__authorInfo", {
          accordion__authorInfo_dark: isDarkTheme,
        })}
      >
        <div
          className={cn("accordion__lifeInformation", {
            accordion__lifeInformation_dark: isDarkTheme,
          })}
        >
          <div className="accordion__auxiliary">
            <span>{yearsOfLife}</span>
            <span className="accordion__country">{country}</span>
          </div>
        </div>
        <div
          className={cn("accordion__nameContainer", {
            accordion__nameContainer_dark: isDarkTheme,
          })}
        >
          <h1 className="accordion__name">{name}</h1>
        </div>
      </div>
      {/* </div> */}
      <div
        className={cn("accordion__dividingLine", {
          accordion__dividingLine_dark: isDarkTheme,
        })}
      />
      <div
        className={cn("accordion__description", {
          accordion__description_dark: isDarkTheme,
        })}
      >
        <p className="accordion__descriptionText">
          {!isOpen ? `${description.substring(0, 256)}...` : description}
        </p>
        <div
          className="accordion__button"
          onClick={() => setIsOpen(!isOpen)}
          aria-hidden
        >
          <Button
            onClick={() => {}}
            isDarkTheme={isDarkTheme}
            isOutlined={true}
          >
            {!isOpen ? "Read more" : "Read less"}
          </Button>
          <Arrow isDarkTheme={isDarkTheme} isOpen={isOpen} />
        </div>
      </div>
      <ul className="accordion__genresList">
        {genres.map((el) => (
          <li key={el}>
            <Label isDarkTheme={isDarkTheme}>{el}</Label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
