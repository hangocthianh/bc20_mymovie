import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import {
  Container,
  CardWrapper,
  CardImage,
  CardTitle,
  CardFooter,
  CardPlay,
  CardDetails,
  CardBook
} from './_component/CardMovieStyle';

export default function CardMovie(props) {
  const { btnDisabled, handlePlayButton, movie, handleShow } = props;
  // console.log(movie);
  return (
    <Container>
      <CardWrapper className="mx-2">
        <CardImage src={movie&&movie.hinhAnh} alt="#"/>
        <CardPlay
          className="animate__animated animate__fadeIn"
          // onClick={()=>{handlePlayButton(movie&&movie.trailer, movie&&movie.tenPhim)}}
          onClick={()=> {handleShow(movie&&movie.trailer, movie&&movie.tenPhim)}}
          data-toggle="modal" 
          data-target="#exampleModal"
        >
          <div> <AiFillPlayCircle size={25} /></div>
          <span>Play</span>
        </CardPlay>

        <CardFooter className="animate__animated animate__fadeIn">
          <CardTitle>
            {movie&&movie.tenPhim}
          </CardTitle>
          <div className="d-flex justify-content-around">
            <CardDetails to={`/detail-movie/${movie&&movie.maPhim}`}>Xem Chi Tiết</CardDetails>
            <CardBook disabled={btnDisabled}>Đặt vé</CardBook>
          </div>
        </CardFooter>
      </CardWrapper>
    </Container>
  );
}
