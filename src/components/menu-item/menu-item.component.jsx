import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-items.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <div
    className={`${size} menu-item`}
    onclick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
