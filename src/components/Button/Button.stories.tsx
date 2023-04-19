import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
  argTypes: {
    label: {
      type: "string",
      defaultValue: "",
    },
    size: {
      type: "string",
      description:
        "The size of the button. small is equivalent to the dense button styling.",
      defaultValue: "medium",
      options: ["medium", "small", "large"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    typebtn: {
      type: "string",
      description:
        "The type of the component. It supports those theme types that make sense for this component.",
      defaultValue: "primary",
      options: ["primary", "link", "danger", "default", "disabled", "success"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    href: {
      type: "string",
      description:
        "The URL to link to when the button is clicked. If defined, an a element will be used as the root node.",
      defaultValue: "",
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
