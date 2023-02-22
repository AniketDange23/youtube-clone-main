import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
       <SidebarRow selected Icon={HomeIcon} title="Home" />
       <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your video" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later " />
      <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked video" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show more" /> 
      <hr />
    </div>
  );
}

export default Sidebar;
