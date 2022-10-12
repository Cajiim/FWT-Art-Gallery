import { Label } from "../components/UI/Label";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}></Label>
);

export const LabelComponent = Template.bind({});
LabelComponent.args = {
  children: "Label",
  isDarkTheme: false,
};
