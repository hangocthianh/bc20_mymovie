import React from 'react';
import { useSelector } from 'react-redux';
import "../../style.css"

export default function InfoTicket(props) {
    const { data } = props;
    const listCheckedSeat = useSelector(state => state.bookTicketReducer.listCheckedSeat);

    return (
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
                                    <span key={index}>{seat.tenGhe}: {seat.giaVe}VND, </span>
                                );
                            })}
                        </td>
                    </tr>
                </tbody>
                <tfoot className="h5">
                    <tr>
                        <td>Tổng tiền</td>
                        <td>{listCheckedSeat.reduce((total, checkedSeat) => { return total += checkedSeat.giaVe }, 0)} VND</td>
                    </tr>
                </tfoot>
            </table>
    );
}
