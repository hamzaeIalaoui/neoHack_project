import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        

        <span className="logo">
          
          <img src="https://i.ibb.co/TYjx8gr/MyProxy.png" width={90} height={90} alt=""/>
         </span> 
 
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://i.ibb.co/dD0mMSZ/image.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
