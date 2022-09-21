import { Link } from "../ui/Link";
import type { TLink } from "../types";
// eslint-disable-next-line import/named, import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (arg: TLink) => {
  return <Link {...arg}></Link>;
};

export const LinkComponent = Template.bind({});
LinkComponent.args = {
  link: "",
  children: "Link",
  isDarkTheme: false,
  className: "",
};
