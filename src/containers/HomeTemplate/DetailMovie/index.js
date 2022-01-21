import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDetailMovie } from './modules/actions';
import styled from 'styled-components';
import "./style.css";
import ShowtimesMovie from "./ShowtimesMovie"


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DetailMovie(props) {
    // data Movie
    const data = useSelector(state => state.detailMovieReducer.data);
    console.log(data);
    const loading = useSelector(state => state.detailMovieReducer.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        const { id } = props.match.params;
        (dispatch(actFetchDetailMovie(id)));
    }, []);

    const ImageMovie = styled.div`
        text-align: center;
        z-index: 1; 
        position: relative;
       
        img{
            width: 220px;
            box-shadow: 0px 0px 50px 15px rgba(255, 255, 255, 0.2);
            border-radius: 2px;
        }
        &::after{
            content: "";
            background-image:url(${data && data.hinhAnh});
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            filter: blur(2px);
            position: absolute;
            top: -10%;
            left: 10%;
            width: 50%;
            height: 120%;
            z-index: -2;
            opacity: 0.5;
        }
    `;

    return (
        <div className='DetailMovie'>
            <div className='container py-5'>
                <h2 className='h2 border-bottom border-light pb-3 px-5'>Nội dung phim</h2>
                <div className="row justify-content-center mt-5 Movie">
                    <ImageMovie className="col-md-5">
                        <img src={data && data.hinhAnh} alt={data && data.hinhAnh} />
                    </ImageMovie>
                    <div className="col-md-7">
                        <h2>{data && data.tenPhim}</h2>
                        <p>{data && data.moTa}</p>
                        <p>Điểm đánh giá: {data && data.danhGia}</p>
                        <p>Ngày khởi chiếu: {new Date(data && data.ngayKhoiChieu).toLocaleDateString()}</p>
                        <div>
                            <button className="btn btn-success mr-3">Đặt vé</button>
                            <button className="btn btn-success">Trailer</button>
                        </div>
                        <div className='mt-3'>
                            <h3>Lịch chiếu:</h3>
                            <ShowtimesMovie data={data} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DetailMovie;




