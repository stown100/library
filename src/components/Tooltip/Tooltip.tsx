import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  label: string;
  size?: string;
  content?: string;
}

const Tooltip = (props: TooltipProps) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const { label, size, content } = props;
  const rootClass = ["tooltip"];
  let rootClassWindowTooltip = ["windowTooltip"];
  let rootClassArrowTooltip = ["arrowTooltip"];
  let rootClassWindowContent = ["windowTooltipContent"];
  const [positionMessage, setPositionMessage] = useState<string[]>([]);
  const [hoverDropdown, setHoverDropdown] = useState(false);

  useLayoutEffect(() => {
    if (content) {
      const container = containerRef.current;

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const windowTooltipWidth = window.innerWidth;
        const windowTooltipHeight = window.innerHeight;

        if (containerRect.left < 0) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("left")) {
              return [...prev, "left"];
            } else {
              return prev;
            }
          });
        } else if (containerRect.right > windowTooltipWidth) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("right")) {
              return [...prev, "right"];
            } else {
              return prev;
            }
          });
        }
        if (containerRect.top < 0) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("top")) {
              return [...prev, "top"];
            } else {
              return prev;
            }
          });
        } else if (containerRect.bottom > windowTooltipHeight) {
          setPositionMessage((prev) => {
            if (Array.isArray(prev) && !prev.includes("bottom")) {
              return [...prev, "bottom"];
            } else {
              return prev;
            }
          });
        }
      }
    }
  }, [hoverDropdown, rootClassWindowTooltip]);

  // size
  if (size === "large") {
    rootClass.push("large");
  } else if (size === "small") {
    rootClass.push("small");
  }

  if (!!positionMessage) {
    rootClassWindowTooltip.push("windowTooltipTop");
    rootClassWindowContent.push("windowTooltipContentTop");
    rootClassArrowTooltip.push("arrowTooltipBottom");
  }
  if (positionMessage.includes("top")) {
    rootClassWindowTooltip.push("windowTooltipBottom");
    rootClassWindowContent.push("windowTooltipContentBottom");
    rootClassArrowTooltip.push("arrowTooltipTop");
    rootClassWindowTooltip = rootClassWindowTooltip.filter(
      (item) => item === "windowTooltip" || item === "windowTooltipBottom"
    );
    rootClassArrowTooltip = rootClassArrowTooltip.filter(
      (item) => item === "arrowTooltip" || item === "arrowTooltipTop"
    );
  }
  if (positionMessage.includes("bottom")) {
    rootClassWindowTooltip.push("windowTooltipTop");
    rootClassWindowContent.push("windowTooltipContentTop");
    rootClassArrowTooltip.push("arrowTooltipBottom");
    rootClassWindowTooltip = rootClassWindowTooltip.filter(
      (item) => item === "windowTooltip" || item === "windowTooltipTop"
    );
    rootClassArrowTooltip = rootClassArrowTooltip.filter(
      (item) => item === "arrowTooltip" || item === "arrowTooltipBottom"
    );
  }
  if (positionMessage.includes("top") && positionMessage.includes("bottom")) {
    rootClassWindowTooltip.push("windowTooltipRight");
    rootClassArrowTooltip.push("arrowTooltipLeft");
    rootClassWindowTooltip = rootClassWindowTooltip.filter(
      (item) => item === "windowTooltip" || item === "windowTooltipRight"
    );
    rootClassWindowContent = rootClassWindowContent.filter(
      (item) => item === "windowTooltipContent"
    );
    rootClassArrowTooltip = rootClassArrowTooltip.filter(
      (item) => item === "arrowTooltip" || item === "arrowTooltipLeft"
    );
  }
  if (
    positionMessage.includes("top") &&
    positionMessage.includes("bottom") &&
    positionMessage.includes("left")
  ) {
    rootClassWindowTooltip.push("windowTooltipLeft");
    rootClassArrowTooltip.push("arrowTooltipRight");
    rootClassWindowTooltip = rootClassWindowTooltip.filter(
      (item) => item === "windowTooltip" || item === "windowTooltipLeft"
    );
    rootClassArrowTooltip = rootClassArrowTooltip.filter(
      (item) => item === "arrowTooltip" || item === "arrowTooltipRight"
    );
  }
  if (
    positionMessage.includes("top") &&
    positionMessage.includes("bottom") &&
    positionMessage.includes("right")
  ) {
    rootClassWindowTooltip.push("windowTooltipLeft");
    rootClassArrowTooltip.push("arrowTooltipRight");
    rootClassWindowTooltip = rootClassWindowTooltip.filter(
      (item) => item === "windowTooltip" || item === "windowTooltipLeft"
    );
    rootClassArrowTooltip = rootClassArrowTooltip.filter(
      (item) => item === "arrowTooltip" || item === "arrowTooltipRight"
    );
  }

  useEffect(() => {
    const handleHoverTooltip = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (
        target.className.split(" ").includes("windowTooltip") ||
        target.className.split(" ").includes("windowTooltipTop") ||
        target.className.split(" ").includes("tooltip") ||
        target.className.split(" ").includes("windowTooltipContent") ||
        target.className.split(" ").includes("arrowTooltip")
      ) {
        setHoverDropdown(true);
      } else {
        setHoverDropdown(false);
      }
    };
    document.addEventListener("mouseover", handleHoverTooltip);
  }, []);

  return (
    <div className="component">
      <div className="tooltipComponent">
        <button className={rootClass.join(" ")} {...{ size }}>
          {label}
        </button>
        {hoverDropdown && content && (
          <div className={rootClassWindowTooltip.join(" ")} ref={containerRef}>
            <span className={rootClassWindowContent.join(" ")}>{content}</span>
            <div className={rootClassArrowTooltip.join(" ")}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
