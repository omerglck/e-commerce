import React from "react";
import { NavLink } from "react-router-dom";

const LinkTag = ({ title, to }) => {
  return <NavLink to={to}>{title}</NavLink>;
};

export default LinkTag;
