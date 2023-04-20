import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Dropdown.css";

export interface ButtonProps {
  label: string;
  size?: string;
  content?: string;
}

const Dropdown = (props: ButtonProps) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const { label, size, content } = props;
  const rootClass = ["dropdown"];
  let rootClassWindow = ["window"];
  let rootClassArrow = ["arrow"];
  const [clickDropdown, setClickDropdown] = useState(false);
  const [positionMessage, setPositionMessage] = useState<string[]>([]);

  useLayoutEffect(() => {
    if (clickDropdown && content) {
      const container = containerRef.current;

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (containerRect.left < 0) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("left")) {
              return [...prev, "left"];
            } else {
              return prev;
            }
          });
          console.log("left");
        } else if (containerRect.right > windowWidth) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("right")) {
              return [...prev, "right"];
            } else {
              return prev;
            }
          });
          console.log("right");
        }
        if (containerRect.top < 0) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("top")) {
              return [...prev, "top"];
            } else {
              return prev;
            }
          });
          console.log("top");
        } else if (containerRect.bottom > windowHeight) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("bottom")) {
              return [...prev, "bottom"];
            } else {
              return prev;
            }
          });
          console.log("bottom");
        }
      }
    }
  }, [clickDropdown, rootClassWindow]);

  useEffect(() => {
    const handleClickDropdown = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (
        target.className.split(" ").includes("window") ||
        target.className === "windowContent"
      ) {
        setClickDropdown(true);
      } else if (target.className.split(" ").includes("dropdown")) {
        setClickDropdown((prev) => (prev = !prev));
      } else {
        setClickDropdown(false);
      }
    };

    // close Popups by ESC
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setClickDropdown(false);
      }
    };
    document.addEventListener("click", handleClickDropdown);
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  // size
  if (size === "large") {
    rootClass.push("large");
  } else if (size === "small") {
    rootClass.push("small");
  }

  console.log(positionMessage);

  if (!!positionMessage) {
    rootClassWindow.push("windowTop");
    rootClassArrow.push("arrowBottom");
  }
  if (positionMessage.includes("top")) {
    rootClassWindow.push("windowBottom");
    rootClassArrow.push("arrowTop");
    rootClassWindow = rootClassWindow.filter(
      (item) => item === "window" || item === "windowBottom"
    );
    rootClassArrow = rootClassArrow.filter(
      (item) => item === "arrow" || item === "arrowTop"
    );
  }
  if (positionMessage.includes("bottom")) {
    rootClassWindow.push("windowTop");
    rootClassArrow.push("arrowBottom");
    rootClassWindow = rootClassWindow.filter(
      (item) => item === "window" || item === "windowTop"
    );
    rootClassArrow = rootClassArrow.filter(
      (item) => item === "arrow" || item === "arrowBottom"
    );
  }
  if (positionMessage.includes("top") && positionMessage.includes("bottom")) {
    rootClassWindow.push("windowRight");
    rootClassArrow.push("arrowLeft");
    rootClassWindow = rootClassWindow.filter(
      (item) => item === "window" || item === "windowRight"
    );
    rootClassArrow = rootClassArrow.filter(
      (item) => item === "arrow" || item === "arrowLeft"
    );
  }
  if (
    positionMessage.includes("top") &&
    positionMessage.includes("bottom") &&
    positionMessage.includes("left")
  ) {
    rootClassWindow.push("windowLeft");
    rootClassArrow.push("arrowRight");
    rootClassWindow = rootClassWindow.filter(
      (item) => item === "window" || item === "windowLeft"
    );
    rootClassArrow = rootClassArrow.filter(
      (item) => item === "arrow" || item === "arrowRight"
    );
  }
  if (
    positionMessage.includes("top") &&
    positionMessage.includes("bottom") &&
    positionMessage.includes("right")
  ) {
    rootClassWindow.push("windowLeft");
    rootClassArrow.push("arrowRight");
    rootClassWindow = rootClassWindow.filter(
      (item) => item === "window" || item === "windowLeft"
    );
    rootClassArrow = rootClassArrow.filter(
      (item) => item === "arrow" || item === "arrowRight"
    );
  }

  return (
    <div className="component">
      <div className="dropdownComponent">
        <button className={rootClass.join(" ")} {...{ size }}>
          {label}
        </button>
        {clickDropdown && content && (
          <div className={rootClassWindow.join(" ")} ref={containerRef}>
            <span className="windowContent">{content}</span>
            <div className={rootClassArrow.join(" ")}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
