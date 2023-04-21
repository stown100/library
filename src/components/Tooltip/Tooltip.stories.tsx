import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Tooltip",
  component: Tooltip,
  argTypes: {
    size: {
      type: "string",
      description: "Set the size of Tooltip",
      defaultValue: "medium",
      options: ["medium", "small", "large"],
      control: {
        type: "radio",
      },
    },
    element: {
      description: "The DOM container, the default behavior is to button",
      defaultValue: "button",
    },
    children: {
      description: "The DOM container, the default behavior is to span",
      defaultValue: "span",
    },
  },
} as ComponentMeta<typeof Tooltip>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const MyTooltip = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
MyTooltip.args = {
  element: <button>Tooltip</button>,
  size: "medium",
  children: <span>Tooltip text content</span>,
};
