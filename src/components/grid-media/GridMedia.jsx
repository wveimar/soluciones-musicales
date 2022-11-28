import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./grid-media.css";
import VideoMedia from "../video-media/VideoMedia";

const GridMedia = ({ code }) => {
  const { error, data } = useQuery(GRID_MEDIA_QUERY, {
    variables: {
      where: { code_contains: `${code}` },
    },
  });
  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [itemsURL] = data?.videoGalleryCollection.items;

  const URLVideos = itemsURL?.list.videos;

  return (
    <div className="video-grid-container">
      {URLVideos &&
        URLVideos.map((item, index) => (
          <VideoMedia className="video-player" url={item.url} key={index} />
        ))}
    </div>
  );
};

export default GridMedia;

const GRID_MEDIA_QUERY = gql`
  query videoGalleryCollection($where: VideoGalleryFilter) {
    videoGalleryCollection(where: $where) {
      items {
        code
        list
      }
    }
  }
`;
