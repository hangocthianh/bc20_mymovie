//import libraries
import  { combineReducers } from 'redux';
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer"
import bookTicketReducer from "../containers/HomeTemplate/BookTicket/modules/reducer"
import checkedSeatReducer from "../containers/HomeTemplate/BookTicket/Seats/modules/reducer";

const rootReducer = combineReducers({
  detailMovieReducer,
  bookTicketReducer,
  checkedSeatReducer,
})

export default rootReducer