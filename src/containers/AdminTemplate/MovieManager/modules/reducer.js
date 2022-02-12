import *as ActionType from "./constants";
const initialState = {
    loading: false,
    data: null,
    error: null,
    loadingAddMovie: false,
    dataAddMovie: null,
    errorAddMovie: null,
    loadingInfoMovie: false,
    dataInfoMovie: null,
    errorInfoMovie: null,
    infoMovie: {},

}

const movieManagerReducer=(state = initialState, action) => {
    switch (action.type) {
        //lấy danh sach phim
        case ActionType.MOVIE_LIST_REQUEST: {
            state.loading= true;
            state.data= null;
            state.error= null;
            return { ...state }
        }
        case ActionType.MOVIE_LIST_SUCCESS: {
            state.loading= false;
            state.data= action.payload;
            state.error= null;
            return { ...state }
        }
        case ActionType.MOVIE_LIST_FAILED: {
            state.loading= false;
            state.data= null;
            state.error= action.payload;
            return { ...state }
        }

        // thêm phim
        case ActionType.ADD_MOVIE_REQUEST: {
            state.loadingAddMovie= true;
            state.dataAddMovie= null;
            state.errorAddMovie= null;
            return { ...state }
        }
        case ActionType.ADD_MOVIE_SUCCESS: {
            state.loadingAddMovie= false;
            state.dataAddMovie= action.payload;
            state.errorAddMovie= null;
            return { ...state }
        }
        case ActionType.ADD_MOVIE_FAILED: {
            state.loadingAddMovie= false;
            state.dataAddMovie= null;
            state.errorAddMovie= action.payload;
            return { ...state }
        }

        // lấy thông tin phim
        case ActionType.INFO_MOVIE_REQUEST: {
            state.loadingInfoMovie= true;
            state.dataInfoMovie= null;
            state.errorInfoMovie= null;
            return { ...state }
        }
        case ActionType.INFO_MOVIE_SUCCESS: {
            state.loadingInfoMovie= false;
            state.dataInfoMovie= action.payload;
            state.errorInfoMovie= null;
            return { ...state }
        }
        case ActionType.INFO_MOVIE_FAILED: {
            state.loadingInfoMovie= false;
            state.dataInfoMovie= null;
            state.errorInfoMovie= action.payload;
            return { ...state }
        }

        default:
            return {...state}
    }
}
export default movieManagerReducer;