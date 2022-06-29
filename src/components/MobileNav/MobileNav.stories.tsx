import { ComponentMeta, ComponentStory } from "@storybook/react";
import MobileNav from ".";

export default {
  title: "MobileNav",
  component: MobileNav,
} as ComponentMeta<typeof MobileNav>;

const Template: ComponentStory<typeof MobileNav> = (args) => (
  <MobileNav {...args} />
);

export const Nav = Template.bind({});

Nav.args = {
  isOpen: true,
  setIsOpen: () => null,
};
