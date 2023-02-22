import React from "react";
import "./VideoCard.css"
import { Avatar } from "@mui/material";

function VideoCard({ image, title, channel, views, timestamp, channelimage }) {
  return (
    <div className="videoCard">
      <img className="videCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard_avatar"
          alt={channel}
          src={channelimage}
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
          {views}.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
