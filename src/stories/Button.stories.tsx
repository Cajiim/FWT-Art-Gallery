import { Button } from "../ui/Button";
import type { TButton } from "../ui/Button/Button";
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (arg: TButton) => {
  const { children } = arg;
  return <Button {...arg}>{children}</Button>;
};

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  className: "button",
  isDisabled: false,
  isOutlined: false,
  isDarkTheme: false,
  children: "click",
};
