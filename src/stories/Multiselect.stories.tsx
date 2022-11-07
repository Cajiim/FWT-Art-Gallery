import { Multiselect } from "../ui/Multiselect";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Multiselect",
  component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = (args) => {
  return <Multiselect {...args}></Multiselect>;
};

export const MultiselectComponent = Template.bind({});
MultiselectComponent.args = {
  isDarkTheme: false,
};
