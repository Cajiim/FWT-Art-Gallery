import { Toast } from "../components/UI/Toast";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <Toast {...args}></Toast>
);

export const ToastComponent = Template.bind({});
ToastComponent.args = {
  children: "Error message",
  isDarkTheme: false,
};
