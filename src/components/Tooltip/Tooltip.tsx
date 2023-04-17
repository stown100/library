import React from "react";
import "./Tooltip.css";

export interface ButtonProps {
  label: string;
}

const Tooltip = (props: ButtonProps) => {
  const { label } = props;

  return <button {...props}>{label}</button>;
};
export default Tooltip;
