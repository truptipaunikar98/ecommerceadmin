import React from "react";
import "../css/sidebar.css"
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="sideBar">
      <h4>Catogories <img src="/imageFolder/componentImg/dropdownIcon.png"/></h4>
      <ul className="sideBarUl">
        <li>
          <Link to="/mensCol">
            <img src="/imageFolder/componentImg/tshirtIcon.avif" /> Mens's Wear
          </Link>
        </li>
        <li>
          <Link to="/womensCol">
            <img src="/imageFolder/componentImg/gownIcon.jpg" /> Women's Wear
          </Link>
        </li>
        <li>
          <Link to="/kidsCol">
            <img src="/imageFolder/componentImg/kidsIcon.png" /> Kid's Wear
          </Link>
        </li>
        <li>
          <Link to="/winterCol">
            <img src="/imageFolder/componentImg/winterWearIcon.png" /> Winter
            Collection
          </Link>
        </li>
        <li>
          <Link to="/footwearCol">
            <img src="/imageFolder/componentImg/footwearIcon.jpg" /> Footwear
          </Link>
        </li>
        <li>
          <Link to="/essentialCol">
            <img src="/imageFolder/componentImg/footwearIcon.jpg" /> Essential
          </Link>
        </li>
        <li>
          <Link to="/trendingCol">
            <img src="/imageFolder/componentImg/trendingIcon.webp" /> Trending
          </Link>
        </li>
        <li>
          <Link to="/bestsellerCol">
            <img src="/imageFolder/componentImg/trendingIcon.webp" /> Best Seller
          </Link>
        </li>
      </ul>
      <div className="sticker">
        <img src="/imageFolder/componentImg/sticker.png"/>
      </div>
    </div>
  );
}

export default SideBar;
