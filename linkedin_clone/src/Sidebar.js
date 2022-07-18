import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media.istockphoto.com/photos/pastel-colored-light-blue-backgrounds-picture-id1334563669?k=20&m=1334563669&s=612x612&w=0&h=uBqhK8ETiWQsYMmObllkbqK4YnFhK_kuINXCjqANj_s="
          alt=""
        />
        <h5 className="sidebar_avatar">Avatar here</h5>
        <h2>Anirudh Richhariya</h2>
        <h4>anirudh0288@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2,188</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("node")}
        {recentItem("programming")}
        {recentItem("developer")}
        {recentItem("softwareengineering")}
        {recentItem("machinelearning")}
        {recentItem("mongolianthroatsinging")}
      </div>
    </div>
  );
}

export default Sidebar;
