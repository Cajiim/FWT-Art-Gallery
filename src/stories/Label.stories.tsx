import { Label } from "../ui/Label";
import type { TLabel } from "../ui/Label/Label";
// eslint-disable-next-line import/named, import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (arg: TLabel) => {
  return <Label {...arg}></Label>;
};

export const LabelComponent = Template.bind({});
LabelComponent.args = {
  children: "Label",
  className: "",
  isDarkTheme: false,
};
