import api from "utils/apiUtils";
import *as ActionType from "./constants";


// lấy danh sách phòng vé
export const actFetchBookingList = (maLichChieu) => {
    return (dispatch) => {
        dispatch(actBookingListRequest());
            api
                .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
                .then((result) => {
                    dispatch(actBookingListSuccess(result.data.content))
                })
                .catch((error) => {
                    dispatch(actBookingListFailed(error))
                })
    }
}
const actBookingListRequest = () => {
    return {
        type: ActionType.BOOKING_LIST_REQUEST,
    }
}
const actBookingListSuccess = (data) => {
    return {
        type: ActionType.BOOKING_LIST_SUCCESS,
        payload: data,
    }
}
const actBookingListFailed = (error) => {
    return {
        type: ActionType.BOOKING_LIST_FAILED,
        payload: error,
    }
}

// chọn ghế đặt
export const actCheckedSeat =(seat)=>{
    return{
        type: ActionType.CHECKED_SEAT,
        payload: seat,
    }
}

// đặt vé
export const actBookTicket = (ticket) => {
    return (dispatch) => {
        dispatch(actBookTicketRequest());
            api
                .post('QuanLyDatVe/DatVe',ticket)
                .then((result) => {
                    dispatch(actBookTicketSuccess(result.data.content));
                    console.log(result.data.content);
                
                })
                .catch((error) => {
                    dispatch(actBookTicketFailed(error))
                })
    }
}
const actBookTicketRequest = () => {
    return {
        type: ActionType.BOOK_TICKET_REQUEST,
    }
}
const actBookTicketSuccess = (data) => {
    return {
        type: ActionType.BOOK_TICKET_SUCCESS,
        payload: data,
    }
}
const actBookTicketFailed = (error) => {
    return {
        type: ActionType.BOOK_TICKET_FAILED,
        payload: error,
    }
}
