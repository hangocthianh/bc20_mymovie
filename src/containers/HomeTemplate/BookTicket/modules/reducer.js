import *as ActionType from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const bookTicketReducer =(state = initialState, action) => {
  switch (action.type) {
    case ActionType.BOOK_TICKET_REQUEST:{
        state.loading= true;
        state.data= null;
        state.error= null;
      return { ...state };
      }
    case ActionType.BOOK_TICKET_SUCCESS:{
        state.loading = false;
        state.data= action.payload;
        state.error=null;
        return { ...state };
    }
    case ActionType.BOOK_TICKET_FAILED:{
        state.loading = false;
        state.data=null;
        state.error=action.payload;
        return {...state};
    }
    default:
        return {...state};
  }
};
export default bookTicketReducer;