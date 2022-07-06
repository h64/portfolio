import { ComponentMeta, ComponentStory } from "@storybook/react";
import ComponentMixins from "./ComponentMixins";

export default {
  title: "ComponentMixins",
  component: ComponentMixins,
} as ComponentMeta<typeof ComponentMixins>;

const Template: ComponentStory<typeof ComponentMixins> = (args) => (
  <ComponentMixins />
);

export const Default = Template.bind({});

Default.args = {};
