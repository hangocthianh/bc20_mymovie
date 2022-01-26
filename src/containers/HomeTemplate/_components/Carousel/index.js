import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
  return (
    <Carousel
      animationHandler="fade"
      autoPlay={true}
      interval={5000}
      transitionTime={1000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
    >
      <div>
        <img src="./img/banner.jpg" alt="banner" />
      </div>
      <div>
        <img src="./img/banner3.jpg" alt="banner" />
      </div>
      <div>
        <img src="./img/banner4.jpg" alt="banner" />
      </div>
      <div>
        <img src="./img/banner5.jpg" alt="banner" />
      </div>
    </Carousel>
  )
}
