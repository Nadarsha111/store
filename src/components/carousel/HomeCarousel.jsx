import React from "react";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <Carousel className="mb-3">
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-100 object-fit-fill h-25"
        />
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-100 object-fit-fill h-25"
        />
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
          src="https://images.pexels.com/photos/7679464/pexels-photo-7679464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-100 object-fit-fill h-25"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
