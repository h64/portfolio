import { ComponentMeta, ComponentStory } from "@storybook/react";
import MotionTest from "./MotionTest";

export default {
  title: "MotionTest",
  component: MotionTest,
} as ComponentMeta<typeof MotionTest>;

const Template: ComponentStory<typeof MotionTest> = (args) => (
  <MotionTest {...args} />
);

export const OpacityText = Template.bind({});

OpacityText.args = {
  variant: "visible",
};
