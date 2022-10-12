import { Checkbox } from "../components/UI/Checkbox";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}></Checkbox>
);

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {
  isDarkTheme: false,
};
