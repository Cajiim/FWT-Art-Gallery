import { Checkbox } from "../ui/Checkbox";
import type { TCheckbox } from "../types";
// eslint-disable-next-line import/named, import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (arg: TCheckbox) => {
  return <Checkbox {...arg}></Checkbox>;
};

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {
  className: "",
  isDarkTheme: false,
};
