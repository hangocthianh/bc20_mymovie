import React from 'react';
import { useSelector } from 'react-redux';

import '../style.css';

export default function InfoTicket(props) {
    const { data } = props;
    const listCheckedSeat = useSelector(state => state.checkedSeatReducer.listCheckedSeat);
    console.log(listCheckedSeat);

    // thông báo đăt vé
    const notiBookTicket = () => {
        if (listCheckedSeat.length !== 0) {
            alert("ĐẶT VÉ THÀNH CÔNG")
        } else {
            alert("Hãy chọn ghế!")
        }
    }
    return (
        <div className="shadow p-3 mb-5 bg-white rounded mt-4">
            <table className="table" >
                <thead className="h4 thead-dark">
                    <tr >
                        <th>Tên phim</th>
                        <th>{data && data.tenPhim}</th>
                    </tr>
                </thead>
                <tbody className="infoTicket">
                    <tr>
                        <th>Rạp</th>
                        <td>{data && data.tenCumRap} - {data && data.tenRap}</td>
                    </tr>
                    <tr>

                        <th>Suất chiếu</th>
                        <td>{data && data.gioChieu} - {data && data.ngayChieu}</td>
                    </tr>
                    <tr>
                        <th>Số ghế</th>
                        <td>
                            {listCheckedSeat.map((seat, index) => {
                                return (
                                    <span>{seat.tenGhe}: {seat.giaVe}VND, </span>
                                );
                            })}
                        </td>
                    </tr>
                </tbody>
                <tfoot className="h5">
                    <tr>
                        <td>Tổng tiền</td>
                        <td>{listCheckedSeat.reduce((total, checkedSeat, index) => { return total += checkedSeat.giaVe }, 0)} VND</td>
                    </tr>
                </tfoot>
            </table>
            <div className='text-center'>
                <button className='btn btn-warning px-3'
                    onClick={() => {
                        notiBookTicket()
                    }}
                >Đặt vé</button>
            </div>
        </div>
    );
}
