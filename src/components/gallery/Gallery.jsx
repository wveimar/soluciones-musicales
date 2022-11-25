import { gql, useQuery } from "@apollo/client";
import React from "react";
import CardGallery from "../card-gallery/CardGallery";
import "./gallery.module.css";

const Gallery = ({ code }) => {
  const { error, data } = useQuery(GALLERY_QUERY, {
    variables: {
      where: { code_contains: code },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [gallery] = data.galleryCollection.items;
  const images = gallery.imagesCollection.items;
  return (
    <div className="gallery-card-container">
      {images.map((itemImage, index) => (
        <CardGallery key={index} infoImage={itemImage} />
      ))}
    </div>
  );
};

export default Gallery;

const GALLERY_QUERY = gql`
  query galleryCollection($where: GalleryFilter) {
    galleryCollection(where: $where) {
      items {
        name
        description
        imagesCollection {
          items {
            title
            fileName
            url
            description
          }
        }
      }
    }
  }
`;
