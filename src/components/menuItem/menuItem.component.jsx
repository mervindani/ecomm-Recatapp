import React from "react";
import "./menuItem.style.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item `}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="backgroundImage"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitltitlee">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;
