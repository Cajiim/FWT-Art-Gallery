import { Loader } from "../ui/Loader";
import type { TLoader } from "../types";
// eslint-disable-next-line import/named, import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (arg: TLoader) => {
  return <Loader {...arg}></Loader>;
};

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {
  isDarkTheme: false,
};
