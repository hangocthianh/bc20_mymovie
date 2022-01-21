import {combineReducers} from "redux";
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer"

const rootReducers= combineReducers({
    detailMovieReducer,
})

export default rootReducers;