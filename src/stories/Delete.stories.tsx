import { Delete } from "../components/Modals/Delete";
import "../styles/breakpoints/breakpoints.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Delete",
  component: Delete,
} as ComponentMeta<typeof Delete>;

const Template: ComponentStory<typeof Delete> = (arg) => {
  return <Delete {...arg}></Delete>;
};

export const DeleteComponent = Template.bind({});

DeleteComponent.args = {
  isDarkTheme: false,
};
