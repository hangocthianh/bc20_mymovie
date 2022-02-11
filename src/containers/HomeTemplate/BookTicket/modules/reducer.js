import *as ActionType from "./constants";

const initialState = {
  loadingBookingList: false,
  dataBookingList: null,
  errorBookingList: null,

  loadingBookTicket: false,
  dataBookTicket: null,
  errorBookTicket: null,

  listCheckedSeat: [],
};

const bookTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    // lấy danh sách phòng đặt vé
    case ActionType.BOOKING_LIST_REQUEST: {
      state.loadingBookingList = true;
      state.dataBookingList = null;
      state.errorBookingList = null;
      return { ...state };
    }
    case ActionType.BOOKING_LIST_SUCCESS: {
      state.loadingBookingList = false;
      state.dataBookingList = action.payload;
      state.errorBookingList = null;
      return { ...state };
    }
    case ActionType.BOOKING_LIST_FAILED: {
      state.loadingBookingList = false;
      state.dataBookingList = null;
      state.errorBookingList = action.payload;
      return { ...state };
    }

    // chọn ghế đặt
    case ActionType.CHECKED_SEAT:
      let listCheckedSeatUpdate = [...state.listCheckedSeat];
      let index = listCheckedSeatUpdate.findIndex(checkedSeat => checkedSeat.tenGhe === action.payload.tenGhe);
      if (index !== -1) {
        listCheckedSeatUpdate.splice(index, 1);
      } else {
        listCheckedSeatUpdate.push(action.payload)
      }
      state.listCheckedSeat = listCheckedSeatUpdate;
      return { ...state };


    // đặt vé
    case ActionType.BOOK_TICKET_REQUEST: {
      state.loadingBookTicket = true;
      state.dataBookTicket = null;
      state.errorBookTicket = null;
      return { ...state };
    }
    case ActionType.BOOK_TICKET_SUCCESS: {
      state.loadingBookTicket = false;
      state.dataBookTicket = action.payload;
      state.errorBookTicket = null;
      return { ...state };
    }
    case ActionType.BOOK_TICKET_FAILED: {
      state.loadingBookTicket = false;
      state.dataBookTicket = null;
      state.errorBookTicket = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default bookTicketReducer;