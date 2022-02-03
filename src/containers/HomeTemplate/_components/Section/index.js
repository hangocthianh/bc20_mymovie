import React, { useState } from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";

import CardMovie from 'containers/HomeTemplate/_components/CardMovie'

import {
  Container,
  Wrapper,
  SectionTitle,
  SectionHeader
} from './_component/SectionStyle';

export default function Section(props) {
  const listMovies = useSelector(state => state.homePageReducer.dataListMovies);

  const [srcVideo, setSrcVideo] = useState('');
  const [nameVideo, setNameVideo] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setSrcVideo('');
    setNameVideo('')
    setShow(false)
  };
  const handleShow = (srcVideo, nameVideo) => {
    setSrcVideo(srcVideo);
    setNameVideo(nameVideo)
    setShow(true)
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    lazyLoad: true,
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
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {nameVideo}
          </Modal.Title>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{display: 'inherit', alignSelf: 'center'}}
          ><IoCloseSharp size={20}/>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title={Date.now()}
            width="100%"
            height={400}
            src={srcVideo}
            frameBorder={0}
            allowFullScreen
          >
          </iframe>
        </Modal.Body>
      </Modal>

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
                    handleShow={handleShow}
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
