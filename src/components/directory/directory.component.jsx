import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = () => {
  const section = useSelector(({ directory }) => directory.section);
  return (
    <div className="directory-menu">
      {section.map(({ id, ...othersectionProps }) => (
        <MenuItem key={id} {...othersectionProps} />
      ))}
    </div>
  );
};

export default Directory;
