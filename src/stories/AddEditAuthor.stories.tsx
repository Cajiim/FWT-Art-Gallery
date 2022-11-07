import { AddEditAuthor } from "../components/Modals/AddEditAuthor";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "AddEditAuthor",
  component: AddEditAuthor,
} as ComponentMeta<typeof AddEditAuthor>;

const Template: ComponentStory<typeof AddEditAuthor> = (args) => {
  return <AddEditAuthor {...args}></AddEditAuthor>;
};

export const AddEditAuthorComponent = Template.bind({});
AddEditAuthorComponent.args = { isDarkTheme: false };
