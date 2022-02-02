import React from 'react';
import Slider from "react-slick";

import {
  Container,
  Wrapper,
  EventTitle,
  EventHeader,
  EventImg,
  EventLink
} from './_component/EventStyle';

export default function Event() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <EventTitle>
        <EventHeader>event</EventHeader>
      </EventTitle>
      <Container>
        <Wrapper>
          <Slider {...settings}>
            <div className="px-2">
              <EventImg src="./img/event1.jpg" alt="event1" />
            </div>
            <div className="px-2">
              <EventImg src="./img/event2.jpg" alt="event2" />
            </div>
            <div className="px-2">
              <EventImg src="./img/event3.jpg" alt="event3" />
            </div>
            <div className="px-2">
              <EventImg src="./img/event4.jpg" alt="event4" />
            </div>
            <div className="px-2">
              <EventImg src="./img/event5.jpg" alt="event5" />
            </div>
            <div className="px-2">
              <EventImg src="./img/event6.jpg" alt="event6" />
            </div>
          </Slider>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <div
            className="row p-3"
            style={{
              borderTop: '2px solid #F08B23'
            }}
          >
            <div className="col-3 px-2" style={{cursor: 'pointer'}}>
              <EventLink>
                <EventImg 
                  src="./img/special1.jpg" 
                  alt="special1" 
                  style={{border: '3px solid #000', maxWidth: '100%'}}/>
              </EventLink>
            </div>
            <div className="col-6 px-2" style={{cursor: 'pointer'}}>
              <EventLink>
                <EventImg 
                  src="./img/special3.jpg" 
                  alt="special3" 
                  style={{border: '3px solid #000', maxWidth: '100%'}}/>
              </EventLink>
            </div>
            <div className="col-3 px-2" style={{cursor: 'pointer'}}>
              <EventLink>
                <EventImg 
                  src="./img/special2.jpg" 
                  alt="special2" 
                  style={{border: '3px solid #000', maxWidth: '100%'}}/>
              </EventLink>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
