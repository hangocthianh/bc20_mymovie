import React from 'react';
import { useSelector } from 'react-redux';
import {CarouselImg} from './_component/CarouselStyle'
export default function HomeCarousel(props) {
  const dataBanner = useSelector(state => state.homePageReducer.dataBanner);
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <CarouselImg src={dataBanner&&dataBanner[0].hinhAnh} className="d-block w-100" alt="..."  />
        </div>
        <div className="carousel-item">
          <CarouselImg src={dataBanner&&dataBanner[1].hinhAnh} className="d-block w-100" alt="..."  />
        </div>
        <div className="carousel-item">
          <CarouselImg src={dataBanner&&dataBanner[2].hinhAnh} className="d-block w-100" alt="..."  />
        </div>
      </div>
      <a className="carousel-control-prev" role="button" data-target="#carouselExampleIndicators" data-slide="prev" href="/#">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ cursor: 'pointer' }} />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" role="button" data-target="#carouselExampleIndicators" data-slide="next" href="/#">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ cursor: 'pointer' }} />
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
