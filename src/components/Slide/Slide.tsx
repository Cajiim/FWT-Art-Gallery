import { FC, useState } from "react";
import classNames from "classnames";
import { ReactComponent as PaintSvg } from "../../assets/img/imgSvg.svg";
import { ReactComponent as Edit } from "../../assets/img/edit.svg";
import { ReactComponent as Delete } from "../../assets/img/delete.svg";
import { Button } from "../../ui/Button";
import { ButtonPictoral } from "../../ui/ButtonPictoral";
import { CloseIcon } from "../../ui/CloseIcon";
import styles from "./Slide.scss";

const cn = classNames.bind(styles);

type TSlide = {
  isDarkTheme?: boolean;
  year: string;
  name: string;
  img: string;
  currentSlide: number;
  sliderLength: number;
};

const Slide: FC<TSlide> = ({
  isDarkTheme,
  year,
  name,
  currentSlide,
  img,
  sliderLength,
}) => {
  const [isRemoveCover, setIsRemoveCover] = useState<boolean>(false);
  return (
    <div className="slide__slideContainer">
      <div className="slide__buttons">
        <div
          className="slide__recoverButton"
          onClick={() => setIsRemoveCover(!isRemoveCover)}
          aria-hidden
        >
          <div className="slide__paintRecover">
            <PaintSvg />
          </div>
          <Button onClick={() => {}} isOutlined={true} isDarkTheme>
            {!isRemoveCover ? "Remove the cover" : "Make the cover"}
          </Button>
        </div>
        <CloseIcon className="closeIcon__slide" isVisible={!isRemoveCover} />
      </div>
      <div
        className={cn("slide__information", {
          slide__information_coverRemove: isRemoveCover,
        })}
      >
        <div
          className={cn("slide__curtain", {
            slide__curtain_dark: isDarkTheme,
          })}
        >
          <div className="slide__curtainButtons">
            <ButtonPictoral isDarkTheme={isDarkTheme}>
              <Edit />
            </ButtonPictoral>
            <ButtonPictoral isDarkTheme={isDarkTheme}>
              <Delete />
            </ButtonPictoral>
          </div>
          <div
            className={cn("slide__description", {
              slide__description_dark: isDarkTheme,
            })}
          >
            <p
              className={cn("slide__year", {
                slide__year_dark: isDarkTheme,
              })}
            >
              {year}
            </p>
            <h4
              className={cn("slide__name", {
                slide__name_dark: isDarkTheme,
              })}
            >
              {name}
            </h4>
          </div>
        </div>
        <div className="slide__fraction">
          <h3>{`${currentSlide}/${sliderLength}`}</h3>
        </div>
      </div>
      <img alt="slideImg" src={img} className="slide__img" />
    </div>
  );
};

export default Slide;
