import { Link } from "../components/UI/Link";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}></Link>;

export const LinkComponent = Template.bind({});
LinkComponent.args = {
  href: "https://www.google.com/",
  children: "Link",
  isDarkTheme: false,
};
