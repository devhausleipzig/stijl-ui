import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconButton } from ".";
import { disableArg } from "../../utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Primitives/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: disableArg,
    css: disableArg,
    as: disableArg,
  },
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <GitHubLogoIcon />,
};
