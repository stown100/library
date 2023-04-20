import React from "react";
import "./Tooltip.css";

export interface ButtonProps {
  label: string;
  size?: string;
  windowposition?: string;
  content?: string;
}

const Tooltip = (props: ButtonProps) => {
  const { label, size, content, windowposition } = props;
  const rootClass = ["tooltip"];
  const rootClassWindow = ["window"];
  const rootClassArrow = ["arrow"];

  // size
  if (size === "large") {
    rootClass.push("large");
  } else if (size === "small") {
    rootClass.push("small");
  }

  // windowposition
  if (windowposition === "windowTop") {
    rootClassWindow.push("windowTop");
    rootClassArrow.push("arrowBottom");
  } else if (windowposition === "windowRight") {
    rootClassWindow.push("windowRight");
    rootClassArrow.push("arrowLeft");
  } else if (windowposition === "windowBottom") {
    rootClassWindow.push("windowBottom");
    rootClassArrow.push("arrowTop");
  } else if (windowposition === "windowLeft") {
    rootClassWindow.push("windowLeft");
    rootClassArrow.push("arrowRight");
  }

  return (
    <div className="component">
      <div className="tooltip-component">
        <div className={rootClassWindow.join(" ")} {...{ windowposition }}>
          <span className="windowContent">{content}</span>
          <div className={rootClassArrow.join(" ")}></div>
        </div>
        <button className={rootClass.join(" ")} {...{ size }}>
          {label}
        </button>
      </div>
    </div>
  );
};
export default Tooltip;
