import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Logo */}
        {/* SearchIcon */}
        <input type="text" placeholder="Search into circles" />
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
