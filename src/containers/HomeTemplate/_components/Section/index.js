import React from 'react';
import Slider from "react-slick";

import CardMovie from 'containers/HomeTemplate/_components/CardMovie'

import {
  Container,
  Wrapper,
  SectionTitle,
  SectionHeader
} from './_component/SectionStyle';

export default function Section(props) {
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
  const { width, btnDisabled, headerName } = props;
  return (
    <>
      <SectionTitle>
        <SectionHeader className={headerName} ></SectionHeader>
      </SectionTitle>
      <Container>
        <Wrapper>
          <Slider {...settings}>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
            <div style={{ width: width }}>
              <CardMovie btnDisabled={btnDisabled}></CardMovie>
            </div>
          </Slider>
        </Wrapper>
      </Container>
    </>
  );
}
