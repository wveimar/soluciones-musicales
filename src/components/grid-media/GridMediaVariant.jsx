import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./grid-media.css";
import VideoMedia from "../video-media/VideoMedia";

const GridMediaVariant = ({ code,groups,title }) => {
  const { error, data } = useQuery(GRID_MEDIA_QUERY, {
    variables: {
      where: { code_contains: `${code}-s5-${groups}` },
    },
  });
  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  const [itemsURL] = data.videoGalleryCollection.items;

  const URLVideos = itemsURL.list.videos;

  return (
    <>
     <h2>{title}</h2>
     <div className="video-grid-container">
     {URLVideos &&
       URLVideos.map((item, index) => (
         <VideoMedia className="video-player" url={item.url} key={index} />
       ))}
   </div>
    </>
   
  );
};

export default GridMediaVariant;

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
