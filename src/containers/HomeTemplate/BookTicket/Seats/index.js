import React from 'react';
import '../style.css'

export default function Seats(props) {

    const { seat } = props;
    let classSeatVip = seat.loaiGhe === 'Vip' ? 'SeatVip' : '';
    let classOccupiedSeat = seat.daDat === true ? 'OccupiedSeat' : '';

    return (
        <>
            <button disabled={seat.daDat} className={`m-1 Button Seat ${classSeatVip} ${classOccupiedSeat}`}>
                {seat.daDat ? 'x' : seat.stt}
            </button>
            {seat.stt % 16 === 0 ? <br /> : ''}
        </>
    );
}
