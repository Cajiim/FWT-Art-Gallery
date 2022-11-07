import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { ReactComponent as ErrorIcon } from "../../assets/img/error.svg";
import styles from "./Textarea.scss";

const cn = classNames.bind(styles);

type TTextarea = HTMLAttributes<HTMLDivElement> & {
  isDarkTheme?: boolean;
  description?: string;
  isError?: boolean;
  errorMessage?: string;
};

const Textarea: FC<TTextarea> = ({
  isDarkTheme,
  description,
  isError,
  errorMessage,
}) => {
  return (
    <div className="textarea">
      <p
        className={cn("textarea__description", {
          textarea__description_dark: isDarkTheme,
        })}
      >
        {description}
      </p>

      <textarea
        className={cn("textarea__content", {
          textarea__content_dark: isDarkTheme,
          textarea__content_error: isError,
        })}
      />

      {isError && (
        <div className="textarea__error">
          <ErrorIcon />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Textarea;
