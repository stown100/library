import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const MyTooltip = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
MyTooltip.args = {
  label: "Tooltip",
};
