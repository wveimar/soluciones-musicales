import { gql, useQuery } from "@apollo/client";
import React from "react";
import CarouselContainer from "../../components/carousel/CarouselContainer";

const Home = ({ pageCode }) => {
  const { error, data } = useQuery(GALLERY_HOME_QUERY, {
    variables: {
      where: { code_contains: `gallery-${pageCode}` },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [gallery] = data.galleryCollection.items;
  const DataImages = gallery?.imagesCollection.items;

  // console.log(images);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h2>{data.galleryCollection.items[0].description}</h2> */}
      <CarouselContainer DataImages={DataImages} />
    </div>
  );
};

export default Home;

const GALLERY_HOME_QUERY = gql`
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
