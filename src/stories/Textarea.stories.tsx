import { Textarea } from "../ui/Textarea";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args}></Textarea>;
};

export const TextareaComponent = Template.bind({});
TextareaComponent.args = {};
