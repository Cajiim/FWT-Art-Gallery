import { Slider } from "../components/Slider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  return <Slider {...args}></Slider>;
};

export const SliderComponent = Template.bind({});
SliderComponent.args = {
  isDarkTheme: false,
};
