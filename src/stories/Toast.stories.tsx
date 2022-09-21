import { Toast } from "../ui/Toast";
import type { TToast } from "../types";
// eslint-disable-next-line import/named, import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (arg: TToast) => {
  return <Toast {...arg}></Toast>;
};

export const ToastComponent = Template.bind({});
ToastComponent.args = {
  children: "Error message",
  isDarkTheme: false,
};
