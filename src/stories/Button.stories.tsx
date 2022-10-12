import { Button } from "../components/UI/Button";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import "../styles/colors/colors.scss";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  className: "button",
  isDisabled: false,
  isOutlined: false,
  isDarkTheme: false,
  children: "click",
};
