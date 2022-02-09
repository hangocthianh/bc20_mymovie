import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style.css'
import { actCheckedSeat } from './modules/actions';

export default function Seats(props) {

    const { seat } = props;
    let classVipSeat = seat.loaiGhe === 'Vip' ? 'SeatVip' : '';
    let classOccupiedSeat = seat.daDat === true ? 'OccupiedSeat' : '';

    const listCheckedSeat = useSelector(state => state.checkedSeatReducer.listCheckedSeat);
    const dispatch = useDispatch();

    let classCheckedSeat = '';
    let indexCheckedSeat = listCheckedSeat.findIndex(checkedSeat => checkedSeat.tenGhe === seat.tenGhe);
    if (indexCheckedSeat !== -1) {
        classCheckedSeat = 'CheckedSeat';
    }

    return (
        <>
            <button
                onClick={()=>{
                    dispatch(actCheckedSeat(seat))
                }}
                disabled={seat.daDat}
                className={`m-1 ButtonSeat Seat ${classVipSeat} ${classOccupiedSeat} ${classCheckedSeat}`}>
                {seat.daDat ? 'x' : seat.stt}
            </button>
            {seat.stt % 16 === 0 ? <br /> : ''}
        </>
    );
}
