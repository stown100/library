import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
  argTypes: {
    size: {
      type: "string",
      description: "Set the size of Dropdown",
      defaultValue: "medium",
      options: ["medium", "small", "large"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const MyDropdown = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
MyDropdown.args = {
  label: "Dropdown",
  size: "medium",
  content: "Dropdown textDropdown text Dropdown text Dropdown text vDropdown text Dropdown text Dropdown textDropdown textDropdown text",
};
