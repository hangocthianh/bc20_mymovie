//import libraries
import  { combineReducers } from 'redux';
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer"
import bookTicketReducer from "../containers/HomeTemplate/BookTicket/modules/reducer"
import homePageReducer from "../containers/HomeTemplate/HomePage/modules/reducer";
import headerReducer from "../containers/HomeTemplate/_components/Header/modules/reducer";
import movieManagerReducer from 'containers/AdminTemplate/MovieManager/modules/reducer';
import adminLoginReducer from "../containers/AdminTemplate/AdminLogin/modules/reducer";
import userManagementReducer from "../containers/AdminTemplate/UserManagement/modules/reducer"

const rootReducer = combineReducers({
  detailMovieReducer,
  bookTicketReducer,
  homePageReducer,
  headerReducer,
  movieManagerReducer,
  adminLoginReducer,
  userManagementReducer
})

export default rootReducer