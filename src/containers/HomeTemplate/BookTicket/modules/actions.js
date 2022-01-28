import api from "utils/apiUtils";
import *as ActionType from "./constants";

export const actFetchBookTicket = (maLichChieu) => {
    return (dispatch) => {
        dispatch(actBookTicketRequest());
            api
                .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
                .then((result) => {
                    dispatch(actBookTicketSuccess(result.data.content))
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