//import libraries
import  { combineReducers } from 'redux';
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer"
import bookTicketReducer from "../containers/HomeTemplate/BookTicket/modules/reducer"
import checkedSeatReducer from "../containers/HomeTemplate/BookTicket/Seats/modules/reducer";
import homePageReducer from "../containers/HomeTemplate/HomePage/modules/reducer";
import headerReducer from "../containers/HomeTemplate/_components/Header/modules/reducer";
import adminLoginReducer from "../containers/AdminTemplate/AdminLogin/modules/reducer";

const rootReducer = combineReducers({
  detailMovieReducer,
  bookTicketReducer,
  checkedSeatReducer,
  homePageReducer,
  headerReducer,
  adminLoginReducer,
})

export default rootReducer