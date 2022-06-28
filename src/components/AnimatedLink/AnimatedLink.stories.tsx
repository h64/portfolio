import { ComponentMeta, ComponentStory } from "@storybook/react";
import AnimatedLink from ".";

export default {
  title: "AnimatedLink",
  component: AnimatedLink,
} as ComponentMeta<typeof AnimatedLink>;

const Template: ComponentStory<typeof AnimatedLink> = (args) => (
  <AnimatedLink {...args} />
);

export const Fill = Template.bind({});
export const Underline = Template.bind({});

Fill.args = {
  children: "A fill link",
  href: "#",
  type: "fill",
};

Underline.args = {
  children: "An underline link",
  href: "#",
  type: "underline",
};
