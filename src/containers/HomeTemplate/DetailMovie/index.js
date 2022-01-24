import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDetailMovie } from './modules/actions';
import styled from 'styled-components';
import "./style.css";
import ShowtimesMovie from "./ShowtimesMovie"

function DetailMovie(props) {
    // data Movie
    const data = useSelector(state => state.detailMovieReducer.data);
    const loading = useSelector(state => state.detailMovieReducer.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        const { id } = props.match.params;
        (dispatch(actFetchDetailMovie(id)));
    }, []);

    const ImageMovie = styled.div`
        width: 80%;
        box-shadow: 0px 0px 50px 15px rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        z-index: 1; 
        position: relative;
        &::after{
            content: "";
            background-image:url(${data && data.hinhAnh});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            filter: blur(2px);
            position: absolute;
            top: -10%;
            left: -10%;
            width: 100%;
            height: 100%;
            z-index: -2;
            opacity: 0.5;
    }
    `;

    return (
        <div className='DetailMovie'>
            <div className='container py-5'>
                <h2 className='h2 border-bottom border-light pb-3 px-5'>Nội dung phim</h2>
                <div className="row justify-content-center mt-5 Movie">
                    <div className="col-md-5 text-center">
                        <ImageMovie>
                            <img className='img-fluid' src={data && data.hinhAnh} alt={data && data.hinhAnh} />
                        </ImageMovie>
                    </div>
                    <div className="col-md-7">
                        <h2>{data && data.tenPhim}</h2>
                        <p>{data && data.moTa}</p>
                        <p>Điểm đánh giá: {data && data.danhGia}</p>
                        <p>Ngày khởi chiếu: {new Date(data && data.ngayKhoiChieu).toLocaleDateString()}</p>
                        <div className='btnDetail'>
                            <button className="Button mr-3">ĐẶT VÉ</button>
                            <button type="button" className="Button" data-toggle="modal" data-target="#trailerModal">TRAILER</button>

                        </div>
                        {/* modal trailer */}
                        <div className="modal fade" id="trailerModal" tabIndex={-1} aria-labelledby="trailerModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="trailerModalLabel">Trailer</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">x</span>
                                        </button>
                                    </div>
                                    <iframe className="modal-body" width="100%" height="350"
                                            src={data && data.trailer} frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
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




