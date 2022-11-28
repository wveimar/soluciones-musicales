import React from "react";
import ReactPlayer from "react-player";

const VideoMedia = ({ url }) => {
  return <ReactPlayer url={url} width="100%" height="100%" />;
};

export default VideoMedia;
