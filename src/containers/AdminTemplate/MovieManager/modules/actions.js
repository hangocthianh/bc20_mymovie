import api from "utils/apiUtils";
import *as ActionType from "./constants.js";

export const actFetchMovieList = (id)=>{
    return (dispatch)=>{
        dispatch(actMovieListRequest());
        api
            .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
            .then((result)=>{
                dispatch(actMovieListSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(actMovieListFailed(error))
            })
    }
}
const actMovieListRequest = ()=>{
    return {
        type: ActionType.MOVIE_LIST_REQUEST,
    }
}
const actMovieListSuccess=(data)=>{
    return {
        type: ActionType.MOVIE_LIST_SUCCESS,
        payload: data,
    }
}
const actMovieListFailed=(error)=>{
    return {
        type: ActionType.MOVIE_LIST_FAILED,
        payload: error,
    }
}