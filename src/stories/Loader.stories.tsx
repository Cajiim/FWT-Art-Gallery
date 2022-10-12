import { Loader } from "../components/UI/Loader";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <Loader {...args}></Loader>
);

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {
  isDarkTheme: false,
};
