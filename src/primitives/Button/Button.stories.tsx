import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";
import { disableArg } from "../../utils/storybook";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Primitives/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: disableArg,
    css: disableArg,
    as: disableArg,
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
};
