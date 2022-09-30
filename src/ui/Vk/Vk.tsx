import { FC } from "react";
import classNames from "classnames";
import { ReactComponent as VkIcon } from "../../assets/img/vk.svg";
import styles from "./Vk.scss";
const cn = classNames.bind(styles);

type TVk = {
  className?: string;
  isDarkTheme?: boolean;
  other?: HTMLAnchorElement;
};

const Vk: FC<TVk> = ({ ...other }) => {
  return (
    <a
      className={cn("vk", other.className, {
        vk_dark: other.isDarkTheme,
      })}
      href="https://vk.com/frameworkteam"
    >
      <VkIcon />
    </a>
  );
};

export default Vk;
