import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Carousel } from "react-carousel-minimal";

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
  const images = gallery?.imagesCollection.items;

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const dataImage = images.map((item) => ({
    image: item.url,
    caption: item.description,
    title: item.title,
  }));
  console.log(images);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{data.galleryCollection.items[0].description}</h2>
      <Carousel
        data={dataImage}
        time={9000}
        width="100vw"
        height="100vh"
        captionStyle={captionStyle}
        radius="20px"
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
      />
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
