import React, { useState } from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';

import CardMovie from 'containers/HomeTemplate/_components/CardMovie'

import {
  Container,
  Wrapper,
  SectionTitle,
  SectionHeader
} from './_component/SectionStyle';

export default function Section(props) {
  const listMovies = useSelector(state => state.homePageReducer.dataListMovies);
  // const iframeRef = useRef(1)
  const [srcVideo, setSrcVideo] = useState('');
  const [nameVideo, setNameVideo] = useState('');
  const handlePlayButton = (srcVideo, nameVideo) => {
    setSrcVideo(srcVideo);
    setNameVideo(nameVideo)
  };

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
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{nameVideo}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                title={Date.now()}
                width="100%"
                height={400}
                src={srcVideo}
                frameBorder={0}
                allowFullScreen
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>
        <SectionHeader className={headerName} ></SectionHeader>
      </SectionTitle>
      <Container>
        <Wrapper>
          <Slider {...settings}>
            {listMovies?.map((movie, index) => {
              return (
                <div style={{ width: width }} key={index}>
                  <CardMovie
                    btnDisabled={btnDisabled}
                    handlePlayButton={handlePlayButton}
                    movie={movie}
                  >
                  </CardMovie>
                </div>
              )
            })}
          </Slider>
        </Wrapper>
      </Container>
    </>
  );
}
