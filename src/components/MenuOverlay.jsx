import React from "react";
import LinkTag from "./LinkTag";

const MenuOverlay = ({ navLinks }) => {
  return (
    <ul className="flex flex-col py-4 gap-3 items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <LinkTag to={link.to} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
