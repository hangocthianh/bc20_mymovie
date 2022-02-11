import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../style.css'
import { actCheckedSeat } from '../../modules/actions';

export default function Seats(props) {

    const { seat } = props;
    let classVipSeat = seat.loaiGhe === 'Vip' ? 'seatVip' : '';
    let classOccupiedSeat = seat.daDat === true ? 'occupiedSeat' : '';
    const listCheckedSeat = useSelector(state => state.bookTicketReducer.listCheckedSeat);
    const dispatch = useDispatch();
    let classCheckedSeat = '';
    let indexCheckedSeat = listCheckedSeat.findIndex(checkedSeat => checkedSeat.tenGhe === seat.tenGhe);
    if (indexCheckedSeat !== -1) {
        classCheckedSeat = 'checkedSeat';
    }

    return (
        <>
            <button
                onClick={()=>{
                    dispatch(actCheckedSeat(seat))
                }}
                disabled={seat.daDat}
                className={`buttonSeat seat ${classVipSeat} ${classOccupiedSeat} ${classCheckedSeat}`}>
                {seat.daDat ? 'x' : seat.stt}
            </button>
            {seat.stt % 16 === 0 ? <br /> : ''}
        </>
    );
}
