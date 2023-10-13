import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Logo */}
        <img src="" alt="" />
        {/* SearchIcon */}
        <div className="header__search">
          <input type="text" placeholder="Search circles" />
        </div>
      </div>

      <div className="header__right">
        {/* HomeIcon */}
        {/* PeopleIcon */}
        {/* WorkIcon */}
        {/* ChatIcon */}
        {/* NotificationIcon */}
        {/* Avatar for logged in user */}
        {/* Drowdown */}
      </div>
    </div>
  );
}

export default Header;
