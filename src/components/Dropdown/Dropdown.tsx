import React, { useEffect, useState } from "react";
import "./Dropdown.css";

export interface ButtonProps {
  label: string;
  size?: string;
  windowposition?: string;
  content?: string;
}

const Dropdown = (props: ButtonProps) => {
  const { label, size, windowposition, content } = props;
  const rootClass = ["dropdown"];
  const rootClassWindow = ["window"];
  const rootClassArrow = ["arrow"];
  const [clickDropdown, setClickDropdown] = useState(false);

  const handleClickDropdown = () => {
    setClickDropdown(!clickDropdown);
  };

  useEffect(() => {
    // close Popups by ESC
    const closeByEscape = (e: any) => {
      if (e.key === "Escape") {
        setClickDropdown(false);
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  });

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
      {clickDropdown && (
        <div className="overlay" onClick={handleClickDropdown}></div>
      )}
      <div className="dropdown-component">
        {clickDropdown && (
          <div className={rootClassWindow.join(" ")} {...{ windowposition }}>
            <span className="windowContent">{content}</span>
            <div className={rootClassArrow.join(" ")}></div>
          </div>
        )}
        <button
          className={rootClass.join(" ")}
          {...{ size }}
          onClick={handleClickDropdown}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
