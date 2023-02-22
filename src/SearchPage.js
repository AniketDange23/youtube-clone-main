import React from "react";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";

import TuneIcon from "@mui/icons-material/Tune";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/EaHjbYWOY1j94LJoZfJYU9GTo2KOsCtKdZ9GLpUVOa1AWYFDFfT10LKX8yFaqnpyRzX9tYxzgQ=s176-c-k-c0x00ffffff-no-rj"
        channel="MortaL"
        verified
        subs="7.04M"
        noOfVideos={198}
        description="Hum toh battle nahi survive kar paaye but Lt. General James Reece is better and stronger."
      />
      <hr />
      <VideoRow 
      views="3.32M views"
       subs="7.04 M"
        description=" a player who is game especially : an athlete who relishes competition. a person who plays games especially : a person who regularly plays computer or video games. "
         timestamp="54 minute"
         channel="MortaL"
         title="Building PRAWN SUIT in SUBNAUTICA BELOW ZERO"
          image="https://i.ytimg.com/an_webp/3pJCyOvcy9g/mqdefault_6s.webp?du=3000&sqp=CNCsz5YG&rs=AOn4CLBvHNtUR015V900ZIVMu9ZmHiOmGQ" 

          />
    </div>
  );
}

export default SearchPage;
