//import libraries
import  { combineReducers } from 'redux';
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer"
import bookTicketReducer from "../containers/HomeTemplate/BookTicket/modules/reducer"

const rootReducer = combineReducers({
  detailMovieReducer,
  bookTicketReducer,
})

export default rootReducer