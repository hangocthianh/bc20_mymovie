//import libraries
import  { combineReducers } from 'redux';
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer"
import bookTicketReducer from "../containers/HomeTemplate/BookTicket/modules/reducer"
import homePageReducer from "../containers/HomeTemplate/HomePage/modules/reducer";
import headerReducer from "../containers/HomeTemplate/_components/Header/modules/reducer";
import movieListReducer from 'containers/AdminTemplate/MovieManager/modules/reducer';


const rootReducer = combineReducers({
  detailMovieReducer,
  bookTicketReducer,
  homePageReducer,
  headerReducer,
  movieListReducer,
})

export default rootReducer