import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  size?: string;
  typebtn?: string;
  href?: string;
}

const Button = (props: ButtonProps) => {
  const { label, size, typebtn, href } = props;
  const rootClass = ["btn"];

  // size
  if (size === "large") {
    rootClass.push("large");
  } else if (size === "small") {
    rootClass.push("small");
  }

  // typebtn
  if (typebtn === "primary") {
    rootClass.push("primary");
  } else if (typebtn === "link") {
    rootClass.push("link");
  } else if (typebtn === "danger") {
    rootClass.push("danger");
  } else if (typebtn === "default") {
    rootClass.push("default");
  } else if (typebtn === "disabled") {
    rootClass.push("disabled");
  } else if (typebtn === "success") {
    rootClass.push("success");
  }

  return typebtn !== "link" ? (
    <button
      disabled={typebtn === "disabled"}
      className={rootClass.join(" ")}
      {...{ label, size, typebtn }}
    >
      {label}
    </button>
  ) : (
    <a {...{ href }} className={rootClass.join(" ")}>
      {label}
    </a>
  );
};

export default Button;
