import { Input } from "../components/UI/Input";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
);

export const InputComponent = Template.bind({});
InputComponent.args = {
  isDarkTheme: false,
  isError: false,
  placeholder: "Placeholder",
  errorMessage: "Error message",
};
