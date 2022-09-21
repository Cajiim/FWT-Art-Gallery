import { Input } from "../ui/Input";
import type { TInput } from "../types";
// eslint-disable-next-line import/named, import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (arg: TInput) => {
  return <Input {...arg}></Input>;
};

export const InputComponent = Template.bind({});
InputComponent.args = {
  className: "",
  isDarkTheme: false,
  isError: false,
  placeholder: "Placeholder",
  errorMessage: "Error message",
};
