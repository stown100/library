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
    windowposition: {
      type: "string",
      description: "Dropdown window position",
      defaultValue: "medium",
      options: ["windowTop", "windowRight", "windowBottom", "windowLeft"],
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
  windowposition: "windowTop",
  content:
    "Dropdown textDropdown textDropdown textDropdown textDropdown textDropdown text Dropdown text Dropdown text Dropdown text Dropdown textDropdown textDropdown textDropdown textDropdown textDropdown text Dropdown text Dropdown text Dropdown text Dropdown textDropdown textDropdown textDropdown textDropdown textDropdown text Dropdown text Dropdown text Dropdown text",
};
