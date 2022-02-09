import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
// import axios from 'axios';
import {
  Container,
  CardWrapper,
  CardImage,
  CardTitle,
  CardFooter,
  CardPlay,
  CardDetails,
} from './_component/CardMovieStyle';

export default function CardMovie(props) {
  const {  movie, handleShow } = props;
  // console.log(movie);
  return (
    <Container>
      <CardWrapper className="mx-2">
        <CardImage src={movie && movie.hinhAnh} alt="#" />
        <CardPlay
          className="animate__animated animate__fadeIn"
          onClick={() => { handleShow(movie && movie.trailer, movie && movie.tenPhim) }}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <div> <AiFillPlayCircle size={25} /></div>
          <span>Play</span>
        </CardPlay>

        <CardFooter className="animate__animated animate__fadeIn">
          <CardTitle>
            {movie && movie.tenPhim}
          </CardTitle>
          <div className="d-flex justify-content-around">
            <CardDetails to={`/detail-movie/${movie && movie.maPhim}`}>Xem Chi Tiết</CardDetails>
            {/* <CardBook
              disabled={btnDisabled}
              onClick={() => {
                let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20";
                if (!localStorage.getItem("UserLogin")) {
                  // Alert when user try to book ticket without login
                  alert()
                }
                else {
                  console.log(accessToken);
                  axios({
                    url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movie && movie.maPhim}`,
                    method: 'GET',
                    headers: {
                      TokenCybersoft: accessToken
                    }
                  })
                    .then(result => {
                      console.log(result);
                    })
                    .catch(err => {
                      console.log(err);
                    })
                }
              }}
            >
              Đặt vé
            </CardBook> */}
          </div>
        </CardFooter>
      </CardWrapper>
    </Container>
  );
}
