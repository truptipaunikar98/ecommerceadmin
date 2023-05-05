import React from "react";

function Sidebar() {
  return (
    <div className=" vh-100 p-0">
      <div className="sideBar">
        <h4>
          Catogories <img src="/imageFolder/componentImg/dropdownIcon.png" />
        </h4>
        <ul className="sideBarUl">
          <li>
            <a>
              <img src="/imageFolder/componentImg/tshirtIcon.avif" /> Mens's
              Wear
            </a>
          </li>
          <li>
            <a>
              <img src="/imageFolder/componentImg/gownIcon.jpg" /> Women's Wear
            </a>
          </li>
          <li>
            <a>
              <img src="/imageFolder/componentImg/kidsIcon.png" /> Kid's Wear
            </a>
          </li>
          <li>
            <a>
              <img src="/imageFolder/componentImg/winterWearIcon.png" /> Winter
              Collection
            </a>
          </li>
          <li>
            <a>
              <img src="/imageFolder/componentImg/footwearIcon.jpg" /> Footwear
            </a>
          </li>
          <li>
            <a>
              <img src="/imageFolder/componentImg/trendingIcon.webp" /> Tranding
            </a>
          </li>
        </ul>
        <div className="sticker">
          <img src="/imageFolder/componentImg/sticker.png" />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
