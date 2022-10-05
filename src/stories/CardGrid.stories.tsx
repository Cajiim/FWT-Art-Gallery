import { CardGrid } from "../ui/CardGrid";
import "../styles/breakpoints/breakpoints.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "CardGrid",
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (arg) => {
  return <CardGrid {...arg}></CardGrid>;
};

export const CardGridComponent = Template.bind({});

CardGridComponent.args = {
  isDarkTheme: false,
};
