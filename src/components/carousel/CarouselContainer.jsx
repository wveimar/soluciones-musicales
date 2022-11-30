import React from "react";
import { Carousel } from "react-carousel-minimal";

const CarouselContainer = ({ DataImages }) => {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const dataImage = DataImages.map((item) => ({
    image: item.url,
    caption: item.description,
    title: item.title,
  }));

  return (
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
  );
};

export default CarouselContainer;
