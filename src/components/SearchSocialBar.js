import React from "react";
import "../css/searchSocialBar.css";
function SearchSocialBar() {
  return (
    <div className="searchSocialBar">
      <div className="socialBar d-flex justify-content-between">
        <p className="margin0">
          <span className="socialBarHeading">Follow Us ON</span><br/>
          <a href="mailto:hitheshubham@gmail.com"><b>Mail Us at</b> : <span>hittheshubham1810@gmail.com</span></a>
        </p>
        <div className="d-flex iconContainer">
          <div className="instaIcon socialIcon">
            <a>
              <img src="/imageFolder/componentImg/instaIcon.png" />
            </a>
          </div>
          <div className="fbIcon socialIcon">
            <a>
              <img src="/imageFolder/componentImg/fbIcon.png" />
            </a>
          </div>
          <div className="whatsAppIcon socialIcon">
            <a>
              <img src="/imageFolder/componentImg/whatsappIcon.png" />
            </a>
          </div>
          <div className="twitterIcon socialIcon">
            <a>
              <img src="imageFolder/componentImg/twitterIcon.webp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSocialBar;
