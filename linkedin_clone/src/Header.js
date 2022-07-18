import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import "./app/174857.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt=""
        />
        <div className="header_search">
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption title="Home" />
        <HeaderOption title="My Network" />
        <HeaderOption title="Jobs" />
        <HeaderOption title="Messaging" />
        <HeaderOption title="Notifications" />
        <HeaderOption avatar="" title="Me" />
      </div>
    </div>
  );
}

export default Header;
