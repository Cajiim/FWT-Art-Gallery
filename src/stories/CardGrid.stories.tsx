import { CardGrid } from "../ui/CardGrid";
import type { TCardGrid } from "../types";
import "../styles/breakpoints/breakpoints.scss";
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "CardGrid",
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (arg: TCardGrid) => {
  const { paintings } = arg;
  return <CardGrid {...arg} {...paintings}></CardGrid>;
};

export const CardGridComponent = Template.bind({});

CardGridComponent.args = {
  paintings: [
    {
      id: "1",
      name: "Jean-Honore Fragonard",
      img: "https://www.figma.com/file/UHg2LdpfSoM8XBrzrqocs6/image/c091415df4d90a14a5a793718ed6c51fcedc32f5?fuid=1151076368311196868",
      year: "1732 - 1806",
    },
  ],
  isDarkTheme: false,
};
