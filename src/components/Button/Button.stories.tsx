import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
  argTypes: {
    size: {
      type: "string",
      description: "Set the size of Button",
      defaultValue: "medium",
      options: ["medium", "small", "large"],
      control: {
        type: "radio",
      },
    },
    typebtn: {
      type: "string",
      description: "Button types",
      defaultValue: "primary",
      options: ["primary", "link", "danger", "default", "disabled", "success"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MyButton = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
MyButton.args = {
  label: "Button",
  size: "medium",
  typebtn: "primary",
  href: "",
};
