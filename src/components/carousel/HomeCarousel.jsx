import React from "react";
import { Carousel, Image } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    // interval={null} stops the carousel from auto slidingn
    <Carousel className="mb-3 ">
      <Carousel.Item className="">
        <Image
          src="https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-100 object-fit-cover"
          style={{ height: "75vh" }}
        />
      </Carousel.Item>
      <Carousel.Item className="">
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Image
          src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-100 object-fit-cover"
          style={{ height: "75vh" }}
        />
      </Carousel.Item>
      <Carousel.Item className="">
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Image
          src="https://images.pexels.com/photos/7679464/pexels-photo-7679464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-100 object-fit-cover"
          style={{ height: "75vh" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
