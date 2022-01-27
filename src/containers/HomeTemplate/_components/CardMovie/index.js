import React from 'react';
import {AiFillPlayCircle} from "react-icons/ai";
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

export default function CardMovie() {
  return (
    <Container>
      <CardWrapper className="mx-2">
        <CardImage src="./img/movie1.jpg" alt="#" />
        <CardPlay className="animate__animated animate__fadeIn">
          <div> <AiFillPlayCircle size={25} /></div>
          Play
        </CardPlay>
        <CardFooter className="animate__animated animate__fadeIn">
          <CardTitle>
            Movie Title
          </CardTitle>
          <div className="d-flex justify-content-around">
            <CardDetails>Xem Chi Tiết</CardDetails>
            <CardBook>Đặt vé</CardBook>
          </div>
        </CardFooter>
      </CardWrapper>
    </Container>
  );
}
