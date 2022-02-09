import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfoTicket from './InfoTicket';
import Seats from './Seats';
import "./style.css";
import { actFetchBookTicket } from './modules/actions';

export default function BookTicket(props) {

    const data = useSelector( state => state.bookTicketReducer.data);
    const dispatch = useDispatch();
    useEffect (()=>{
        const { maLichChieu } = props.match.params;
        dispatch(actFetchBookTicket(maLichChieu));
    },[]);

    // render danh sách ghế
    const renderSeats=()=>{
        return data?.danhSachGhe?.map((seat,index)=>{
            return(
                    <Seats seat={seat} key={index}/> 
            )
        })
    }

    return (
        <div className="bookingTicket">
            <div className="container pt-5">
                <h2 className='h2 border-bottom border-light pb-3 px-5'>ĐẶT VÉ XEM PHIM: {data&&data.thongTinPhim.tenPhim}</h2>
                <div className="row mt-5">
                    <div className="col-7">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="screen mb-5">
                                <h3>Màn hình</h3>
                            </div>
                            <div>
                            {renderSeats()}
                            </div>
                            <div className='m-5'>
                                <button className="ButtonSeat Seat mr-1"></button><span>ghế thường</span>
                                <button className="ButtonSeat SeatVip mr-1 ml-3"></button><span>ghế Vip</span>
                                <button className="ButtonSeat CheckedSeat mr-1 ml-3 "></button><span>ghế đang chọn</span>
                                <button className="ButtonSeat OccupiedSeat mr-1 ml-3"></button><span>ghế đã đặt</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <p className="h3 text-center">Thông tin vé</p>
                        <InfoTicket data={data&&data.thongTinPhim} />
                    </div>
                </div>
            </div>
        </div>
    );
}
