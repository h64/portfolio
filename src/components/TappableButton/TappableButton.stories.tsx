import { ComponentMeta, ComponentStory } from "@storybook/react";
import TappableButton from ".";

export default {
  title: "TappableButton",
  component: TappableButton,
} as ComponentMeta<typeof TappableButton>;

const Template: ComponentStory<typeof TappableButton> = (args) => (
  <TappableButton {...args} />
);

export const Button = Template.bind({});

Button.args = {
  children: <>Button</>,
  label: "Visually hidden label",
  onClick: undefined,
};
