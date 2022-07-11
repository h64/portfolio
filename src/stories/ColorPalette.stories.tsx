import { ComponentMeta, ComponentStory } from "@storybook/react";
import ColorPalette from "./ColorPalette";

export default {
  title: "ColorPalette",
  component: ColorPalette,
} as ComponentMeta<typeof ColorPalette>;

const Template: ComponentStory<typeof ColorPalette> = (args) => (
  <ColorPalette />
);

export const Default = Template.bind({});

Default.args = {};
